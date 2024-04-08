// 再帰
export const exponent = (x, y) => {
    if (y === 0) {
        return 1;
      }
    return x * exponent(x, y - 1);
}

// ループ
export const loop = (x, y) => {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}
