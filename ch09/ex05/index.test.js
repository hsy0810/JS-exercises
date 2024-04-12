import { instanceOf } from "./index.js";

// 基底クラス
class MyClass {
    constructor(x) {
        this.x = x;
    }
}

// 継承クラス
class FirstClass extends MyClass {
    cal() {
        return this.x * 2;
    }
}

class SecondClass extends FirstClass {
    constructor(x, y) {
        super(x); // 親クラスのコンストラクタを呼び出す
        this.y = y;
    }
    cal() {
        return this.x + this.y;
    }
}

// 継承関係にないクラス
class OtherClass {
    constructor(x) {
        this.x = x;
    }
}

 // 多段に継承したクラスのインスタンスと基底クラスのコンストラクタを入力するケース
 test('instanceOf', () => {
    const obj = new SecondClass(1,5);
    const result = instanceOf(obj, MyClass);
    expect(result).toBe(true);
});

 // 継承関係にないインスタンスとクラスのコンストラクタを入力するケース
 test('instanceOf', () => {
    const obj = new OtherClass(1); 
    const result = instanceOf(obj, MyClass);
    expect(result).toBe(false);
});