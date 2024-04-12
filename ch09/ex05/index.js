export function instanceOf(object, constructor) {
    //objectのプロトタイプを取得
    let objProto = Object.getPrototypeOf(object);

    //コンストラクタのプロトタイプを取得
    let consProto = constructor.prototype;

    //nullになるまで走査する
    while (objProto !== null) {
        if (objProto === consProto) {
            return true;
        }
        // 上位プロトタイプを取得する
        objProto = Object.getPrototypeOf(objProto);
    }
    return false;
}