export function equalArrays(a, b) {
    if (a === b) return true; //同一の配列は等しい
    if (a.length !== b.length) return false; //長さを比較
    for(let i = 0; i < a.length; i++) { //すべての要素を巡回
        if (a[i] !== b[i]) return false;
    }
    return true;
    
}