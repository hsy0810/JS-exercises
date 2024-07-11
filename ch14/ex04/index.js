export class ToPrimitive {
    constructor(char) {
        // ひらがなのユニコード範囲
        if (!char.match(/^[\u3040-\u309F]$/)) {
            throw new Error("ひらがなではありません");
        }
        this.char = char;
        this.unitCode = char.charCodeAt(0);
    }

    [Symbol.toPrimitive](arg) {
        // 文字列が期待される場合
        if (arg === 'string') {
            return this.char;
            // 数字が期待される場合
        } else if (arg === 'number') {
            return this.unitCode;
            // どちらでもない場合
        } else {
            return this.char;
        }
    }
}