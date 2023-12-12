// このクラスでは、Mapを拡張して、キーがマップ上に存在しないときに、
// get()メソッドがnullの代わりに指定した値を返すようにする
class DefaultMap extends Map {
    constructor(defaultValue) {
        super();
        this.defaultValue = defaultValue;
    }

    get(key) {
        if (this.has(key)) {
            return super.get(key);
        }
        else {
            return this.defaultValue;
        }
    }
}

// このクラスは、単語頻度ヒストグラムを計算し、表示する
class Histogram {
    constructor() {
        this.wordCounts = new DefaultMap(0);
        this.totalWords = 0;
    }

    // この関数はtext中の単語でヒストグラムを更新する
    add(text) {
        // テキストから空白文字を取り除き、すべての文字を大文字に変換する
        // text = text.replace(/\s/g, "").toUpperCase();
        const matches = text.toLowerCase().matchAll(/\w+|\$[\d.]+|\S+/g);
        const words = [...matches].map((r) => r[0]);

        // テキスト中の単語をループする
        for(let word of words) {
            let count = this.wordCounts.get(word);
            this.wordCounts.set(word, count+1);
            this.totalWords++;
        }
    }

    // ヒストグラムを文字列に変換して、ASCIIグラフィックとして表示する
    toString() {
        // マップを[キー、単語数]配列に変換する
        let entries = [...this.wordCounts];
        
        // 単語数順にソートする。単語数が同じ場合はアルファベット順でソートする
        entries.sort((a,b) => {
            if (a[1] === b[1]) {
                return a[0] < b[0] ? -1 : 1;
            } else {
                return b[1] - a[1];
            }
        });

        // 単語数をパーセントに変換する
        for(let entry of entries) {
            entry[1] = entry[1] / this.totalWords*100;
        }

        // 出現頻度 0.5% 以上を取得
        entries = entries.filter((entry) => entry[1] >= 0.5);

         // padStart で表示幅を揃える / # の数を n ではなく 10 * n に変更
         const lines = entries.map(
            ([l, n]) =>
            `${l.padStart(10)}: ${"#".repeat(Math.round(10 * n))} ${n.toFixed(2)}%`
        );

        //各行を改行文字で区切って結合し、結合した文字列を返す
        return lines.join("\n");
    }
}

// このasync関数はHistogramオブジェクトを生成する。
// 標準入力からテキストを非同期に読み出し、読み出したテキストをヒストグラムに追加する
// テキストを最後まで読み出したら、ヒストグラムを返す

async function histogramFromStdin() {
    process.stdin.setEncoding("utf-8");
    let histogram = new Histogram();
    for await (let chunk of process.stdin) {
        histogram.add(chunk);
    }
    return histogram;
}

// 標準入力からHistogramオブジェクトを生成し、ヒストグラムを表示する
histogramFromStdin().then(histogram => { console.log(histogram.toString())});

