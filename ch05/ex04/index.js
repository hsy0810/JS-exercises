// while
export function fibonacci1() {
    let arr = [];
    let first = 1;
    let second = 1;

    while (arr.length < 10) {
        arr.push(first);
        let next =  first + second;
        first = second;
        second = next;
    }
    return arr;
}

//do while
export function fibonacci2() {
    let arr = [];
    let first = 1;
    let second = 1;

    do{
        arr.push(first);
        let next = first + second;
        first = second;
        second = next;
    }while(arr.length<10);

    return arr;
}

//for
export function fibonacci3() {
    let arr = [];
    let first = 1;
    let second = 1;

    for(let i = 0; i<10; i++) {
        arr.push(first);
        let next = first + second;
        first = second;
        second = next;
    }

    return arr;
}