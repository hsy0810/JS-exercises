export function any(...pres) {
    // 新しい関数を返す
    return function(...args) {
        for (let pre of pres) {
          // 各関数に引数を渡して実行し、すべてがtrue が返った場合は true を返す
          if (pre(...args)) {
            return true;
          }
        }
        return false;
      };
}

export function catching(fn1, fn2) {
    return function(...args) {
        try {
          // 1つ目の関数を呼び出す
          return fn1(...args);
        } catch (error) {
          // 1つ目の関数で例外が発生した場合、2つ目の関数で処理する
          return fn2(error);
        }
      };
}
