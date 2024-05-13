// f はオブジェクトを1つ引数に取る関数
export function cache(f) {
  // この関数を実装する
  const cache = new WeakMap();
  return function(obj) {
    if (!cache.has(obj)) {
      cache.set(obj, f(obj));
    }
    return cache.get(obj);
  };
}

export function slowFn(obj) {
  // 時間のかかる処理
  if (obj.value === 0) {
    return 1;
  } else {
    return obj.value * slowFn({value: obj.value - 1});
  }
}

// cachedSlowFnを同じ引数で複数回呼び出すと、2回目以降はキャッシュが返る
export const cachedSlowFn = cache(slowFn);


let obj = { value: 100 };
console.log(cachedSlowFn(obj));