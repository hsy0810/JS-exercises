// [エンディアン変換](https://qiita.com/tobira-code/items/a03f39a02678d80bbd26) 

//リトルエンディアン→ビッグエンディアン
export function littleToBig(little) {
    let big = new Uint32Array(little.length);
    for (let i = 0; i < little.length; i++) {
        //シフト演算
        big[i] = ((little[i] & 0xFF) << 24) |
            ((little[i] & 0xFF00) << 8) |
            ((little[i] >> 8) & 0xFF00) |
            ((little[i] >> 24) & 0xFF);
    }
    return big;
}

//ビッグエンディアン→リトルエンディアン
export function bigToLittle(big) {
    let little = new Uint32Array(big.length);
    for (let i = 0; i < big.length; i++) {
        little[i] = ((big[i] & 0xFF) << 24) |
            ((big[i] & 0xFF00) << 8) |
            ((big[i] >> 8) & 0xFF00) |
            ((big[i] >> 24) & 0xFF);
    }
    return little;
}