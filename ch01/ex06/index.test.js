import { fib } from "./index.js";

describe("math", () => {
    describe("fib", () => {
      it("returns 5 value when 5 given", () => {
        expect(fib(5)).toBe(5);
      });
  
      it("returns 12586269025 value when 50 given", () => {
        expect(fib(50)).toBe(12586269025);
      });
    });
});  