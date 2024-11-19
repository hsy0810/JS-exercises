let a, x, y;
const r = 10;

// with (Math) {
//   a = PI * r * r;
//   x = r * cos(PI);
//   y = r * sin(PI / 2);
// }
a = Math.PI * r * r;
x = r * Math.cos(Math.PI);
y = r * Math.sin(Math.PI / 2);

console.log(a, x, y);

/* 実行結果
> ch17-preset@1.0.0 npx
> eslint ex01/lint_sample.js


/home/kashie/JS-exercises/ch17/ex01/lint_sample.js
  4:1  error  Parsing error: 'with' in strict mode

✖ 1 problem (1 error, 0 warnings)
*/