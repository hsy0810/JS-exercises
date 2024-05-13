import {slowFn, cache, cachedSlowFn} from "./index.js";

// テストケース
test('cachedSlowFn', () => {
    let obj = { value: 5 };
    expect(cachedSlowFn(obj)).toBe(120); 
  });
