function f(str) {
    // 第1引数でlengthを指定する
    // 第2引数のアロー関数でiを$xとマッピング
    // 関数の本体（文字列）を返す
    return new Function(...Array.from({ length: 10 }, (_, i) => `$${i + 1}`), `return ${str}`);
};

const arr = [7,6,9,1,4,2,3];
console.log(arr.reduce(f("$1 + $2"), 0));
console.log(arr.sort(f("$1 - $2")));