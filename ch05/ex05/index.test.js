import { takeOdd } from "./index.js";

describe("takeOdd", () => {
  it("値が偶数のプロパティだけを持ちオブジェクトを返す", async () => {
    const obj = { a: 1, b: 2, c: 3 };
    const newObject = { b: 2};
    expect(takeOdd(obj)).toEqual(newObject);
  });
});
