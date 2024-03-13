let o = {};
o.x = 1;
let p = Object.create(o);
p.y = 2;
let q = Object.create(p);
q.z = 3;
let f = q.toString();
q.x + q.y;

// 構文：prototypeObj.isPrototypeOf(object)
console.log(o.isPrototypeOf(p)); //true
console.log(o.isPrototypeOf(q)); //true
console.log(p.isPrototypeOf(q)); //true


//Object
let myObject = {
    name: 'John'
};
let newObject1 = Object.create(myObject);
newObject1.age = 30;
let newObject2 = Object.create(newObject1);
newObject2.city = 'New York';
console.log(myObject.isPrototypeOf(newObject1));
console.log(myObject.isPrototypeOf(newObject2));
console.log(newObject1.isPrototypeOf(newObject2));

//Array
let myArray = [];
let newArray1 = Object.create(myArray);
newArray1[0] = "A";
let newArray2 = Object.create(newArray1);
newArray2[1] = "B";
console.log(myArray.isPrototypeOf(newArray1));
console.log(myArray.isPrototypeOf(newArray2));
console.log(newArray1.isPrototypeOf(newArray2));

//Date
let myDate = new Date();
let newDate1 = Object.create(myDate);
let newDate2 = Object.create(newDate1);
console.log(myDate.isPrototypeOf(newDate1));
console.log(myDate.isPrototypeOf(newDate2));
console.log(newDate1.isPrototypeOf(newDate2));


//Map
let myMap = new Map();
let newMap1 = Object.create(myMap);
let newMap2 =  Object.create(newMap1);
console.log(myMap.isPrototypeOf(newMap1));
console.log(myMap.isPrototypeOf(newMap2));
console.log(newMap1.isPrototypeOf(newMap2));