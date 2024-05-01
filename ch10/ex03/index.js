//package.jsonのtypeにCommonJsを指定する必要がある
const { sum, Range } = require('./myModule.cjs');

// import {sum, Range} from './myModule.cjs'

// sum 関数
const result = sum(1, 3);
console.log(result); 

//Rangeクラス
const obj = new Range(1,3);
const result2 = obj.toString();
console.log(result2);
