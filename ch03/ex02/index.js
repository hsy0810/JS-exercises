console.log("整数の最大値:", Number.MAX_SAFE_INTEGER);
console.log("整数の最小値:", Number.MIN_SAFE_INTEGER);
console.log("整数の最大値+1:", Number.MAX_SAFE_INTEGER+1);
console.log("最大値+1 === 最大値+2:", Number.MAX_SAFE_INTEGER+1 === Number.MAX_SAFE_INTEGER+2);
// 1を足しても、2を足しても、最大値を超えたら計算の精度が失われるため、同じ値を返す
