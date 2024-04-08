// 組み込み関数
console.log(Math.max.toString()); // => 出力：function min() { [native code] }


// 自作関数
function showMax(...args) {

    let max = args[0];
    for (let i = 1; i < args.length; i++) {
      if (args[i] > max) {
        max = args[i];
      }
    }
    return max;
  }
console.log(showMax.toString());// => 出力: ソースコード全体が返した
