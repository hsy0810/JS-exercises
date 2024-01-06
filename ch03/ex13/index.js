class Example {

  constructor(str, value) {
    this._str = str;
    this._value = value;
  }
  valueOf() {
    return this._value;
  }
  toString() {
    return this._str;
  }

}
  
let obj = new Example("str", 5);
console.log(+obj);
console.log('' + obj);
