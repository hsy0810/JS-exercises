import { exponent, loop } from "./index.js";

test("exponent", () => {
    expect(exponent(2,3)).toBe(8);
  });

test("loop", () => {
    expect(loop(2,3)).toBe(8);
  });