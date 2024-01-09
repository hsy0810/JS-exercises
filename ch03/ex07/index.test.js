import { equalArrays } from "./index.js";

describe("equalArrays", () => {
    it("値が明らかに違うのに `true` と返してしまう", async () => {

      expect(equalArrays("123",["1", "2", "3"])).toEqual(true);
      expect(equalArrays({x: 1}, {y: 2})).toEqual(true);
    });
  });