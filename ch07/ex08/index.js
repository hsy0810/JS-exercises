export function reverse(str){
    //文字列を最小の描画単位に分割する
    const segmenterFr = new Intl.Segmenter( { granularity: 'grapheme' });
    // 分割単位を配列に追加する
    const segments = Array.from(segmenterFr.segment(str), ({ segment }) => segment);
    // 文字列をリバース
    const newStr = segments.reverse().join("").toString();
    return newStr;
}
