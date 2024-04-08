import { any, catching } from "./index.js";

test("any", () => {
    const isNonZero = any(
        (n) => n > 0,
        (n) => n < 0
      );
    expect(isNonZero(0)).toBe(false);
    expect(isNonZero(42)).toBe(true);
    expect(isNonZero(-0.5)).toBe(true);
  });

  test("catching", () => {
    const safeJsonParse = catching(JSON.parse, (e) => {
        return { error: e.toString() };
      });
    const expect1 = '{"a": 1}';
    const result1 = {a: 1};
    expect(safeJsonParse(expect1)).toEqual(result1);

    const expect2 = "{Invalid Json}";
    const result2 = {error: "SyntaxError: Expected property name or '}' in JSON at position 1"};
    expect(safeJsonParse(expect2)).toEqual(result2);

  });