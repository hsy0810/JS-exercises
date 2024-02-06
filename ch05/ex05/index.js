export function takeOdd(obj) {
    let newObject = {};

    for(const key in obj) {
        if(obj[key] % 2 === 0){
            newObject[key] = obj[key];
        }
    }
    return newObject;
}