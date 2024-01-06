let obj1 = {x: 1};
obj1.y = 2;

let obj2 ={x:1, y:2};

console.log(obj1 === obj2);

export function equals(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (obj1.length !== obj2.length) return false;
    for(let i = 0; i < obj1.length; i++) {
        if (obj1[i] !== obj2[i]) return false;
    }
    return true;
}