function counterIter(max) {
    console.log("counterIter");
    let c = 1;
    return {
      [Symbol.iterator]() {
        console.log("counterIter: Symbol.iterator");
        return this;
      },
      next() {
        console.log("counterIter: next");
        if (c >= max + 1) {
          return { value: undefined, done: true };
        }
        const value = c;
        c++;
        return { value, done: false };
      },
      return(value) {
        console.log("counterIter: return:", value);
        return { value, done: true };
      },
      throw(e) {
        console.log("counterIter: throw:", e);
        throw e;
      },
    };
  }
  
  function* counterGen(max) {
    console.log("counterGen");
    try {
      for (let c = 1; c <= max; c++) {
        console.log("counterGen: next");
        yield c;
      }
    } catch (e) {
      console.log("counterGen: catch:", e);
    } finally {
      console.log("counterGen: finally");
    }
}


// 明示的にイテレータインタフェースのメソッドを呼んだり、間接的に呼んだりする
// => counterIter()関数は直接的にnext()を呼んでいる。
// => counterGen()関数はイテレータを生成し、next() メソッドはその生成されたイテレータを通じて間接的に呼び出される。


// ジェネレータ関数によって生成されたオブジェクトがイテレータインタフェースを満たしていることを確認する
// => Symbol.iterator プロパティが定義され、その値が next() メソッドを持つことを確認する。
const genObj = counterGen(3);
console.log(typeof genObj[Symbol.iterator] === 'function'); // true
console.log(typeof genObj.next === 'function'); // true


//`return()` や `throw()` がどのようなときに呼ばれるのか確認する
// =>return()がジェネレータの実行が早期に終了する場合に呼び出される
    // => returnすると、doneの値がtrueになる
// =>反復用の値がmaxになった時点、throw()が呼び出される

// ジェネレータ関数の中身がどのタイミングで初めて実行されるか確認する
// => 最初にそのオブジェクトのnext()メソッドが呼ばれたときに初めて実行される