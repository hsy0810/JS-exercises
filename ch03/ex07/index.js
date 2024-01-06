export function equalArrays(a, b) {
    if (a === b) return true;
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++) {
        if (a[i] !== b[i] && !(String(a[i]) === String(b[i]))) return false;
    }
    return true;
}