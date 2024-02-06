import { parseJSON } from "./index.js";

describe("parseJSON", () => {
  it("文字列を JSON としてパースできる", async () => {
    const str = '{"key": "value"}';
    const result = { success: true, data: { key: 'value' } };
    expect(parseJSON(str)).toEqual(result);
  });
});


describe("parseJSON", () => {
    it("文字列を JSON としてパースできない", async () => {
      const str = '{key: "value"}';
      const result = { success: false,
        error: "Expected property name or '}' in JSON at position 1" };
      expect(parseJSON(str)).toEqual(result);
    });
  });