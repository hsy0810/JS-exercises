const positiveInfinity = Infinity;
const negativeInfinity = -Infinity;
const nan = NaN;

// 加算
console.log("正の無限大 + 正の無限大:", positiveInfinity + positiveInfinity);
console.log("正の無限大 + 負の無限大:", positiveInfinity + negativeInfinity);
console.log("正の無限大 + NaN:", positiveInfinity + nan);
console.log("負の無限大 + 負の無限大:", negativeInfinity + negativeInfinity);
console.log("負の無限大 + 正の無限大:", negativeInfinity + positiveInfinity);
console.log("負の無限大 + NaN:", negativeInfinity + nan);
console.log("NaN + NaN:", nan + nan);
console.log("NaN + 正の無限大:", nan + positiveInfinity);
console.log("NaN + 負の無限大:", nan + negativeInfinity);

// 減算
console.log("正の無限大 - 正の無限大:", positiveInfinity - positiveInfinity);
console.log("正の無限大 - 負の無限大:", positiveInfinity - negativeInfinity);
console.log("正の無限大 - NaN:", positiveInfinity - nan);
console.log("負の無限大 - 負の無限大:", negativeInfinity - negativeInfinity);
console.log("負の無限大 - 正の無限大:", negativeInfinity - positiveInfinity);
console.log("負の無限大 - NaN:", negativeInfinity - nan);
console.log("NaN - NaN:", nan - nan);
console.log("NaN - 正の無限大:", nan - positiveInfinity);
console.log("NaN - 負の無限大:", nan - negativeInfinity);

// 乗算
console.log("正の無限大 * 正の無限大:", positiveInfinity * positiveInfinity);
console.log("正の無限大 * 負の無限大:", positiveInfinity * negativeInfinity);
console.log("正の無限大 * NaN:", positiveInfinity * nan);
console.log("負の無限大 * 負の無限大:", negativeInfinity * negativeInfinity);
console.log("負の無限大 * 正の無限大:", negativeInfinity * positiveInfinity);
console.log("負の無限大 * NaN:", negativeInfinity * nan);
console.log("NaN * NaN:", nan * nan);
console.log("NaN * 正の無限大:", nan * positiveInfinity);
console.log("NaN * 負の無限大:", nan * negativeInfinity);

// 除算
console.log("正の無限大 / 正の無限大:", positiveInfinity / positiveInfinity);
console.log("正の無限大 / 負の無限大:", positiveInfinity / negativeInfinity);
console.log("正の無限大 / NaN:", positiveInfinity / nan);
console.log("負の無限大 / 負の無限大:", negativeInfinity / negativeInfinity);
console.log("負の無限大 / 正の無限大:", negativeInfinity / positiveInfinity);
console.log("負の無限大 / NaN:", negativeInfinity / nan);
console.log("NaN / NaN:", nan / nan);
console.log("NaN / 正の無限大:", nan / positiveInfinity);
console.log("NaN / 負の無限大:", nan / negativeInfinity);
