const sum = (x, y) => x + y;

class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    toString() {
        return `(${this.from}...${this.to})`;
    }
}

//エクスポート
module.exports = {
    sum,
    Range
};