// undefined=>undefined
let value = undefined;
console.log(typeof value);

// null=>object
value = null;
console.log(typeof value);

//オブジェクト=>object
value = {x:1, y:2};
console.log(typeof value);

//NaN=>number
value = NaN;
console.log(typeof value);

//NaN=>number
value = 100;
console.log(typeof value);

//関数=>function
value = () => {
    return 0;
}
console.log(typeof value);