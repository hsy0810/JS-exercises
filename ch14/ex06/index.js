export function useReflect(obj) {
    // メソッド呼び出し履歴を配列に記録する
    const arr = [];
  
    const handler = {
        // プロパティの取得操作
      get(obj, name, receiver) {
        // 任意のメソッド
        const meth = Reflect.get(obj, name, receiver);
        if (typeof meth === 'function') {
          return function (...args) {
            const time = new Date();
            // プロキシ経由で配列に追加
            arr.push({
              time,
              methodName: name,
              args: args
            });
            return Reflect.apply(meth, this, args);
          };
        }
        return meth;
      }
    };
  
    const proxy = new Proxy(obj, handler);
  
    return { proxy, arr };
  }

  //2重プロキシが期待される