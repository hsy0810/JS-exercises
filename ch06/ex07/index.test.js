import { assign } from "./index.js";

describe("assign", () => {
    it("`Object.assign()`と等価な関数 `assign()` を作成する", async () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 3, c: 4 };
        const mySymbol = Symbol('mySymbol');
        const obj3 = { [mySymbol]: 'mySymbolValue' };
        const targetObject1 = Object.assign({}, obj1, obj2, obj3);
        const targetObject2 = assign({}, obj1, obj2, obj3);
      expect(JSON.stringify(targetObject1)).toEqual(JSON.stringify(targetObject2));
    });
  });