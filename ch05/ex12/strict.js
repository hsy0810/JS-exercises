//strictモードでは変数を宣言しないとエラーになる
const a = 1;
b = 2; // 変数bを宣言せずに使用する
console.log(a + b);

//ReferenceError: b is not defined