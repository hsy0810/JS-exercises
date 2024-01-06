import { replaceLfToCrlf, replaceCrltToLf } from "./index.js";

describe("replaceLfToCrlf", () => {
    it("LF -> CRLF", async () => {
      const inputStr = "Hello\nWorld!";
      const expectedStr = "Hello\r\nWorld!";
      expect(replaceLfToCrlf(inputStr)).toEqual(expectedStr);
    });
  
    it("CRLF -> LF", async () => {
        const inputStr = "Hello\r\nWorld!";
        const expectedStr = "Hello\nWorld!";
        expect(replaceCrltToLf(inputStr)).toEqual(expectedStr);
    });
  });