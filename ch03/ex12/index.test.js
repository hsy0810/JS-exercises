import { equals } from "./index.js";

describe("equals", () => {
    it("２つのオブジェクトが同じ内容なら、別オブジェクトでも `true` を返す", async () => {
        let obj1 = {x: 1};
        obj1.y = 2;

        let obj2 ={x:1, y:2};

      expect(equals(obj1,obj2)).toEqual(true);
    });
  });