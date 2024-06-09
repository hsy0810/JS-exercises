import {slowFn, cachedSlowFn} from "./index.js";

// テストケース
test('cachedSlowFn', () => {
    let obj = { value: 5 };
    expect(cachedSlowFn(obj)).toBe(120); 
  });

  test('cachedSlowFn', () => {
    let obj = { value: 5 };

    // キャッシュされていない場合の実行時間計測
    const startTimeWithoutCache = performance.now();
    const resultWithoutCache = slowFn(obj); // キャッシュされていない実行
    const endTimeWithoutCache = performance.now();
    const executionTimeWithoutCache = endTimeWithoutCache - startTimeWithoutCache;

    // キャッシュされている場合の実行時間計測
    const startTimeWithCache = performance.now();
    const resultWithCache = cachedSlowFn(obj); // キャッシュされている実行
    const endTimeWithCache = performance.now();
    const executionTimeWithCache = endTimeWithCache - startTimeWithCache;

    // 実行時間の比較
    console.log(`Execution time without cache: ${executionTimeWithoutCache} milliseconds`);
    console.log(`Execution time with cache: ${executionTimeWithCache} milliseconds`);

    // キャッシュされている場合の実行時間が短いことを確認
    expect(executionTimeWithCache).toBeLessThan(executionTimeWithoutCache);

  });
