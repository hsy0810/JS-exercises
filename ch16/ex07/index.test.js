import { checkEntry } from "./index.js";


it("return file", async () => {
    const path = 'ch16/ex06/index.md';
    const expectedEntry = "file";
    expect(checkEntry(path)).toEqual(expectedEntry);
});


it("return directory", async () => {
    const path = 'ch16/ex07';
    const expectedEntry = "directory";
    expect(checkEntry(path)).toEqual(expectedEntry);
});
