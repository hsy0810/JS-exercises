//Symbolを使う
let s = Symbol('mySymbol');
let t = Symbol('mySymbol');
let myObject = {};
myObject[s] = 1;
myObject[t] = 2;
console.log(myObject[s]);
console.log(myObject[t]);

//Symbol.forを使う
s = Symbol.for('mySymbol');
t = Symbol.for('mySymbol');
myObject[s] = 1;
myObject[t] = 2;
console.log(myObject[s]);
console.log(myObject[t]);