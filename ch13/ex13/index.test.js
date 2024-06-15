import { walk } from "./index.js";

test('再帰的に探索するジェネレータ関数',async () => {
    const rootPath = 'ch13/walk/';

    const expectedEntries = [
        { path: 'ch13/walk/', isDirectory: true },
        { path: 'ch13/walk/foo.txt', isDirectory: false },
        { path: 'ch13/walk/B', isDirectory: true },
        { path: 'ch13/walk/B/C', isDirectory: true },
        { path: 'ch13/walk/B/C/buz.txt', isDirectory: false },
        { path: 'ch13/walk/A', isDirectory: true } 
    ]
    const result = [];
    for await (const entry of walk(rootPath)) {
        result.push(entry);
    }
    result.forEach((entry, index) => {
        expect(entry.path).toEqual(expectedEntries[index].path);
        expect(entry.isDirectory).toEqual(expectedEntries[index].isDirectory);
    });
});