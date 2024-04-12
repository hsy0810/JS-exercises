export class C {
    //静的メソッド,クラス名を使って直接呼び出す
    // C.method()
    static method() {
        return 1;
    }

    // インスタンスメソッド、インスタンスを作成してから呼び出す
    // new C().method()
    method() {
        return 2;
    }

    //静的プロパティ、クラス名を使って直接呼び出す
    // C.C
    static get C() {
        return class {

            // C.C.method()で呼び出す
            static method() {
                return 3;
            }

            // new C.C().method()
            method() {
                return 4;
            }
        };
    }

    // インスタンスプロパティ、インスタンスを作成してから呼び出す
    // new C().C
    get C() {
        return class {

            //new C().C.method()
            static method() {
                return 5;
            }

            // new new C().C().method()
            method() {
                return 6;
            }
        }
    }
}