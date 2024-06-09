import { fibonacciSequence } from "./index.js";

test('フィボナッチ数を生成する', () => {
    const fib = fibonacciSequence();
    expect(fib.next().value).toBe(1);
    expect(fib.next().value).toBe(1);
    expect(fib.next().value).toBe(2);
    expect(fib.next().value).toBe(3);
    expect(fib.next().value).toBe(5);
    expect(fib.next().value).toBe(8);
});

test('fibonacciSequence()関数はイテレータ', () => {
    const fib = fibonacciSequence();
    expect(typeof fib[Symbol.iterator]).toBe('function');
    expect(fib[Symbol.iterator]()).toBe(fib);
});