import {removeSemicolon, addSemicolon} from "./index.js";

describe("Semicolon", () => {
    describe("removeSemicolon", () => {
      it("JSソースコードからセミコロンを除外する", () => {
        const code = `console.log("Hello Workld!");`;
        expect(removeSemicolon(code)).toBe(`console.log("Hello Workld!")`); 
      });
    });
    describe("addSemicolon", () => {
      it("JSソースコードにセミコロンを追加する", () => {
        const code = `console.log("Hello Workld!")`;
        expect(addSemicolon(code)).toBe(`console.log("Hello Workld!");`); 
      });
    });
});  