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

// このクラスは、文字頻度ヒストグラムを計算し、表示する
class Histogram {
    constructor() {
        this.letterCounts = new DefaultMap(0);
        this.totalLetters = 0;
    }

    // この関数はtext中の文字でヒストグラムを更新する
    add(text) {
        // テキストから空白文字を取り除き、すべての文字を大文字に変換する
        text = text.replace(/\s/g, "").toUpperCase();

        // テキスト中の文字をループする
        for(let character of text) {
            let count = this.letterCounts.get(character);
            this.letterCounts.set(character, count+1);
            this.totalLetters++;
        }
    }

    // ヒストグラムを文字列に変換して、ASCIIグラフィックとして表示する
    toString() {
        // マップを[キー、文字数]配列に変換する
        let entries = [...this.letterCounts];

        // 文字数順にソートする。文字数が同じ場合はアルファベット順でソートする
        entries.sort((a,b) => {
            if (a[1] === b[1]) {
                return a[0] < b[0] ? -1 : 1;
            } else {
                return b[1] - a[1];
            }
        });

        // 文字数をパーセントに変換する
        for(let entry of entries) {
            entry[1] = entry[1] / this.totalLetters*100;
        }

        // 1%未満の文字は表示しない
        entries = entries.filter(entry => entry[1] >= 1);

        // 各項目を一行のテキストに変換する
        let lines = entries.map(
            ([l,n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`);

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

