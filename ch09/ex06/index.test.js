import { TypedMap } from "./index.js";

test("TypedMap", () => {
    const typedMap = new TypedMap('string', 'number', [['a', 1], ['b', 2]]);
    expect(typedMap.keyType).toEqual('string');
    expect(typedMap.valueType).toEqual('number');
});

test("entriesに存在しないタイプは例外処理", () => {
    expect(() => {
        new TypedMap('string', 'number', [['a', 1], ['b', true]]);
    }).toThrowError('Wrong type for entry [b, true]');
});


test("マップに追加されるentriesに存在しないタイプは例外処理", () => {
    const typedMap = new TypedMap('string', 'number', [['a', 1], ['b', 2]]);
    expect(() => {
        typedMap.set('c', true);
    }).toThrowError('true is not of type number');

    expect(() => {
        typedMap.set(true, 3);
    }).toThrowError('true is not of type string');
});