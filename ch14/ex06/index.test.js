import { useReflect } from "./index.js";

describe('useReflect', () => {
    // 任意のオブジェクト
    const obj = {
        // greet(name) {
        //     return `Hello, ${name}!`;
        // },
        add(a, b) {
            return a + b;
        }
    };

    // プロキシと履歴配列を取得
    const { proxy, arr } = useReflect(obj);

    test('プロキシ経由でメソッドを呼び出す', () => {

        // プロキシ経由でメソッドを呼び出す
        // expect(proxy.greet('Alice')).toBe('Hello, Alice!');
        expect(proxy.add(2, 3)).toBe(5);
    })

    test('履歴内容の確認', () => {
        const record = arr[0];
        const now = new Date();

        // toStrictEqualはいい感じにオブジェクトを比較できる
        expect(record.methodName).toEqual('add');
        expect(record.args).toEqual([2, 3]);
        // 1秒以内の時間の差を許容
        expect(record.time.getTime()).toBeCloseTo(now.getTime(), -1000);
       
    });
})
   