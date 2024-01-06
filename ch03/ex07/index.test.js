import { equalArrays } from "./index.js";

describe("equalArrays", () => {
    it("値が明らかに違うのに `true` と返してしまう", async () => {
        const a = ['1', '2', '3'];
        const b = [1, 2, 3];

      expect(equalArrays(a,b)).toEqual(true);
    });
  });