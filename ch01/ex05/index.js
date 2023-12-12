export function abs(value){
    return Math.abs(value);
}

export function sum(a, b){
    return a + b;
}

export function factorial(n){
    let result = 1;
    while(n > 1){
        result *= n;
        n--;
    }
    return result;
}