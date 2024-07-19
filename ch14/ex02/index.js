export class MyArrayLike {
  constructor(length) {
    this.length = length;
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
}
