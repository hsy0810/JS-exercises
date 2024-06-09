// ジェネレータを使う
// function* fibonacciSequence() {
//     let x = 0, y = 1;
//     for(; ;) {
//         yield y;
//         [x, y] = [y, x+y];
//     }
// }

// ジェネレータを使わず
export function fibonacciSequence() {
    let x = 0, y = 1;
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            let value = y;
            [x, y] = [y, x + y];
            return { value, done: false };
        }
    };
}

const fib = fibonacciSequence();
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
console.log(fib.next().value); // 5
console.log(fib.next().value); // 8