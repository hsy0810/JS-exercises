import { walk } from "./index.js";

test('再帰的に探索するジェネレータ関数',() => {
    const rootPath = 'ch12/ex06/';

    const expectedEntries = [
        { path: 'ch12/ex06/', isDirectory: true },
        { path: 'ch12/ex06/index.test.js', isDirectory: false },
        { path: 'ch12/ex06/index.js', isDirectory: false }  
    ]
    const result = [];
    for (const entry of walk(rootPath)) {
        result.push(entry);
    }
    result.forEach((entry, index) => {
        expect(entry.path).toEqual(expectedEntries[index].path);
        expect(entry.isDirectory).toEqual(expectedEntries[index].isDirectory);
    });
});