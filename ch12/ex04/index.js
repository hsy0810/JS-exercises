export function* primeGen(x) {

    // 素数は2から
    if (x < 2) return;

    // step1: 1番目にfalseを、2番目以降に全てtrueを入れる
    const arr = Array(x + 1).fill(true);
    arr[0] = arr[1] = false;

    // step2：配列の先頭から順に走査し、
    // trueの要素を見つけたらその添字pを素数リストに追加し、
    // 配列のp²以上のpの倍数番目をfalseにする
    // step3：篩い落とし操作を、走査している要素の添字がxの平方根に達するまで行う
    for (let p = 2; p <= Math.sqrt(x); p++) {
        if (arr[p]) {
            for (let multiple = p * p; multiple <= x; multiple += p) {
                arr[multiple] = false;
            }
        }
    }

    // step4：最後までtrueだった要素の添字を素数リストに追加して処理終了
    for (let i = 2; i <= x; i++) {
        if (arr[i]) yield i;
    }
}
