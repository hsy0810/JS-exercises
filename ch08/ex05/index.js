export function sequenceToObject(...values) {
    if (values.length % 2 !== 0) {
        throw new Error('値の個数の合計が偶数であることが必要です');
    }
    const result = {};
    for (let i = 0; i < values.length; i += 2) {
        //奇数番の値
        const oddIndexedValue = values[i];
        if (typeof oddIndexedValue !== 'string') {
            throw new Error('奇数番の値が string であることが必要です');
        }
        // 偶数番の値
        const evenIndexedValue = values[i + 1];

        // {a: 1, b: 2}の形式で返す
        result[oddIndexedValue] = evenIndexedValue;
    }

    return result;
}

// スプレッド演算子で配列を与えられることを確認する
const arr = ["a", 1, "b", 2, "c", 3];
console.log(sequenceToObject(...arr)); 