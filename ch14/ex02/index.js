export class MyArrayLike {
  constructor(...items) {
    this.length = items[0];
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.length; i++) {
      yield this[i];
    }
  }
}

export class MyArray extends Array {
  constructor(items) {
    super(...items);
  }

  // 結果の型を変更するには`Symbol.species`を指定する
  static get [Symbol.species]() {
    return MyArrayLike;
  }

  // map(callback) {
  //   const mapped = super.map(callback);
  //   return new MyArrayLike(mapped);
  // }

  // slice(begin, end) {
  //   const sliced = super.slice(begin, end);
  //   return new MyArrayLike(...sliced);
  // }
}
