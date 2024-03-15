import { push, pop, shift, unshift, sort } from "./index.js";
const seq = [1, 2, 3, 4, 5];

test("push", () => {
    expect(push(seq, 6)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test("pop", () => {
    expect(pop(seq)).toStrictEqual([1, 2, 3, 4]);
});

test("shift", () => {
    expect(shift(seq)).toStrictEqual([2, 3, 4, 5]);
});

test("unshift", () => {
    expect(unshift(seq, 0)).toStrictEqual([0, 1, 2, 3, 4, 5]);
});

test("sort", () => {
    expect(sort(seq, (a, b) => b - a)).toStrictEqual([5, 4, 3, 2, 1]);
    expect(seq).toStrictEqual([1, 2, 3, 4, 5]);
});