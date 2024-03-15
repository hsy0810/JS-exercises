import { addArray, multipArray } from "./index.js";

describe("addArray", () => {
    it("行列の加算", async () => {
        const row = 5;
        const col = 7;

        expect(addArray(row, col)).toBe(12); 
    });

    it("行列の乗算", async () => {
        const row = 5;
        const col = 7;

        expect(multipArray(row, col)).toBe(35); 
    });
  });