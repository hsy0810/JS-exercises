import { fibonacci1, fibonacci2, fibonacci3 } from "./index.js";

describe("fibonacci1", () => {
  it("フィボナッチ数列", async () => {
    const arr = fibonacci1();
    const expectArr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    expect(arr).toEqual(expectArr);
  });
});

describe("fibonacci2", () => {
    it("フィボナッチ数列", async () => {
      const arr = fibonacci2();
      const expectArr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
      expect(arr).toEqual(expectArr);
    });
  });

  describe("fibonacci3", () => {
    it("フィボナッチ数列", async () => {
      const arr = fibonacci3();
      const expectArr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
      expect(arr).toEqual(expectArr);
    });
  });