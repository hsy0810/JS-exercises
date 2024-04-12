export class C {
    constructor() {
        // プライベートな変数
       this._x = 0; // 初期値は0
    }

    get x() {
        // パブリックなメソッドからプライベートな変数の値を取得
        return this._x++; // xを返してから1増やす
    }
}