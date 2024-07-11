export function unwritableAndUnconfigurableObj() {
    const obj = { a: 1 };
    Object.defineProperty(obj, 'a', {
      writable: false, //書き換え不可＝＞ (a.a = 3)).toThrow()
      configurable: false //設定変更不可＝＞delete a.a).toThrow()
    });
    return obj;
  }
  
  export function writableAndUnconfigurableObj() {
    const obj = { b: 2 };
    Object.defineProperty(obj, 'b', {
      writable: true, //書き換え可＝＞(b.b).toBe(3)
      configurable: false //設定変更不可＝＞delete b.b).toThrow()
    });
    return obj;
  }
  
  export function nestedUnwritableObj() {
    const obj = { c: { d: { e: 3 } } };
    //ネストされたオブジェクトはすべて書き換え不可
    Object.freeze(obj);
    Object.freeze(obj.c);
    Object.freeze(obj.c.d);
    return obj;
  }
  