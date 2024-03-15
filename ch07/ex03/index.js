export function sum(arr) {
    arr = arr || [];
    return arr.reduce((x, y) => x + y, 0);
}

export function join(arr, separator) {

    if (!Array.isArray(arr)) {
        throw new Error();
    }

    if (separator === undefined) {
        separator = ",";
    }

    return arr.map(item => item === null ? "" : item).join(separator);
}

export function reverse(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }
    return arr.reverse();
}

//修正
export function every(arr,call) {
    arr = arr || [];
    return arr.every((value) => call(value));
}

//修正
export function some(arr, call) {
    arr = arr || [];
    return arr.some((value) => call(value));
}