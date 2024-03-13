const object1 = {};

Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false,  //値変更可
    enumerable: true, //列挙可
});

// 何もされていない時
console.log(object1.hasOwnProperty("property1")); //＝＞true
console.log(object1.propertyIsEnumerable("property1"));  //＝＞true

//プロパティの変更
object1.property1 = 50;
// TypeError: Cannot assign to read only property 'property1' of object '#<Object>
console.log(object1.hasOwnProperty("property1"));
console.log(object1.propertyIsEnumerable("property1"));

//プロパティの削除
delete object1.property1;
// TypeError: Cannot delete property 'property1' of #<Object>
console.log(object1.hasOwnProperty("property1"));
console.log(object1.propertyIsEnumerable("property1"));