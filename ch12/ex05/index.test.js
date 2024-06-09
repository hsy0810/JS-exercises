import { readLines } from "./index.js";

jest.mock('fs', () => ({
    openSync: jest.fn(),
    readSync: jest.fn(),
    closeSync: jest.fn(),
}));

test('ファイルを改行コード `\n` の出現ごとに分割して返す', () => {
    const filePath = 'ch12/ex05/sample.txt';
    const lines = readLines(filePath);
    const resultLines = [];
    const expectedLines = [
        'aoufafaleivao',
        'ao29v02jvlw39v',
        '018vjwoe04',
        '3b0bjo329',
        'v002p1'
    ]
    for (let line of lines) {
        resultLines.push(line);
    }

    expect(resultLines).toEqual(expectedLines); 
});

test('バッファサイズに超えたらエラー', () => {
    openSync.mockImplementation(() => 123); // 仮のファイルディスクリプタを返す
    readSync.mockReturnValue(20); // 20 バイトずつ読み取る
    closeSync.mockImplementation(() => {}); 
    const filePath = 'ch12/ex05/sample.txt';
    const lines = readLines(filePath);
    
    for (let line of lines) {
        resultLines.push(line);
    }

    expect(closeSync).toHaveBeenCalled(); 
});