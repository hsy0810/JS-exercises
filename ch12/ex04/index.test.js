import { primeGen } from "./index.js";

test('最初の素数が2である', () => {
    const gen = primeGen(120);

    // 最初の素数が2であることをテスト
    expect(gen.next().value).toBe(2);
});

test('120以下の素数が正しく生成されることを確認', () => {
    const gen = primeGen(120);

    // 120以下の素数が正しく生成されることを確認
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113];
    for (let i = 0; i < primes.length; i++) {
        expect(gen.next().value).toBe(primes[i]);
    }
});