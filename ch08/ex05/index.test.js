import { sequenceToObject } from "./index.js";

describe("sequenceToObject", () => {
    it("奇数番はstring,偶数番は任意", async () => {

        expect(sequenceToObject("a", 1, "b", 2)).toEqual({a: 1, b: 2}); 
        expect(sequenceToObject("a", 1, "b",undefined)).toEqual({a: 1, b: undefined});
    });
    it("奇数番はstringではないときに例外処理", async () => {

        expect(() => {
            sequenceToObject("a", 1, 555, 2);
        }).toThrow("奇数番の値が string であることが必要です");

    });

    it("値の個数の合計が偶数ではないときに例外処理", async () => {

        expect(() => {
            sequenceToObject("a", 1, "b");
        }).toThrow("値の個数の合計が偶数であることが必要です");

    });
  });