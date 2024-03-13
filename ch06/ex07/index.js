export function assign(target, ...sources) {
    for(let source of sources) {
        for(let key of Object.keys(source)){
            // 独自プロパティをコピー
            target[key] = source[key];
        }
        // プロパティがsymbolの場合もコピー
        const symbols = Object.getOwnPropertySymbols(source);
        for (let symbol of symbols) {
            target[symbol] = source[symbol];
        }
    }
    return target;
}