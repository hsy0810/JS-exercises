import { taggedTemplate } from "./index.js";

test("string型", () => {
    const str = taggedTemplate`${"A"}`; 
    expect(str).toBe('string');
});

test("object型", () => {
    const str1 = taggedTemplate`${{ x: 1 }}`; 
    const str2 = taggedTemplate`${null}`; 
    expect(str1).toBe('object');
    expect(str2).toBe('object');
});

test("number型", () => {
    const str = taggedTemplate`${123}`; 
    expect(str).toBe('number');
});

test("boolean型", () => {
    const str = taggedTemplate`${true}`; 
    expect(str).toBe('boolean');
});

