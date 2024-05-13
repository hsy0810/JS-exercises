import { sortJapanese, toJapaneseDateString } from "./index.js";

test("sortJapanese", () => {
    const jpStr = ['び', 'あ', 'ひ', 'が', 'い', 'ば', 'は', 'カ', 'つ', 'っ', 'タ'];
    const sortedStr = ['あ', 'い', 'が', 'カ', 'タ', 'つ', 'っ', 'ば', 'は', 'び', 'ひ'];
    expect(sortJapanese(jpStr)).toEqual(sortedStr);
});

test("toJapaneseDateString", () => {
    const date = new Date(2024, 3, 2);
    const expectedDate = '令和6年4月2日';
    expect(toJapaneseDateString(date)).toEqual(expectedDate);
});
