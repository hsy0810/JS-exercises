import { TypeMap } from "./index.js";

class Foo {}
test("TypeMap", () => {
    const typeMap = new TypeMap();
    
    typeMap.set(String, "string");
    typeMap.set(Number, 123);
    typeMap.set(Foo, new Foo());

    expect(typeMap.get(String)).toBe("string");
    expect(typeMap.get(Number)).toBe(123);
    expect(typeMap.get(Foo)).toBeInstanceOf(Foo);
    
    //異常系
    expect(() => {
        typeMap.set(1, 222); 
    }).toThrow('Keyはコンストラクタ関数に限定する');

    expect(() => {
        typeMap.set(Date, "not a date"); 
    }).toThrow('コンストラクタ関数の `key` と そのクラスの `value` のみ受け付ける');
});