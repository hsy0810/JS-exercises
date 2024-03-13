import { getProperties } from "./index.js";

describe("getProperties", () => {
    it("すべての独自プロパティおよび列挙可能な継承プロパティのプロパティ名の配列を返す", async () => {
        // 継承元オブジェクト
        const protptype = {
            name: 'John',
        };
        // 列挙不可のプロパティを追加
        Object.defineProperty(protptype, 'job', {
            value: 'SE',
            enumerable: false
        });
        //継承先オブジェクトに独自プロパティを追加
        const newObject = Object.create(protptype);
        newObject.age = 30;
        newObject.city = 'New York'
        // 列挙不可のプロパティを追加
        Object.defineProperty(newObject, 'family', {
            value: 3,
            enumerable: false
        });
        // シンボルのプロパティを追加
        newObject.symbol = Symbol('mySymbol');

      expect(getProperties(newObject)).toEqual([ [ 'age', 'city', 'family', 'symbol' ], 'name' ]);
    });
  });