import { escapeString1, escapeString2 } from "./index.js";

describe("escapeString1", () => {
  it("エスケープシーケンスに変換する", () => {
      const str = escapeString1("\u0009hello,world\u000B");
      expect(str).toBe('\\thello,world\\v');
  });
});

describe("escapeString2", () => {
  it("エスケープシーケンスに変換する", () => {
    const str = escapeString2("\u0009hello,world\u000B");
    expect(str).toBe('\\thello,world\\v');
});
  });

