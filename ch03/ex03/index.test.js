import { caculateFloat } from "./index.js";

describe("caculateFloat", () => {
  it("2個の数値は同値であること", async () => {
   const result = caculateFloat(0.5-0.4, 0.1);
    expect(result).toBe(true);
  });
});
