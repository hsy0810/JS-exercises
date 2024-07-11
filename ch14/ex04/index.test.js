import { ToPrimitive } from "./index.js";

test("文字列が期待される場合", () => {
    const hiragana = new ToPrimitive('あ');
    expect(String(hiragana)).toBe('あ');
});

test("数字が期待される場合", () => {
    const hiragana = new ToPrimitive('あ');
    expect(Number(hiragana)).toBe(12354);
});

test("どちらでもない場合", () => {
    const hiragana = new ToPrimitive('あ');
    expect(hiragana + '').toBe('あ');
    expect(+hiragana).toBe(12354);
});

test("ひらがな以外の文字が入力された場合", () => {
    expect(() => {
        new ToPrimitive('a');
    }).toThrow("ひらがなではありません");
});

test("ソート", () => {
    const hiragana1 = new ToPrimitive('あ');
    const hiragana2 = new ToPrimitive('え');
    const hiragana3 = new ToPrimitive('う');
    const arr = [hiragana1, hiragana2, hiragana3];
    arr.sort((a, b) => a - b);
    expect(arr.map(h => String(h))).toEqual(['あ', 'う', 'え']);
});