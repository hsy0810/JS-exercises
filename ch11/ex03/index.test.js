import { littleToBig, bigToLittle } from './index.js';

describe('エンディアン変換', () => {
    test('リトルエンディアンからビッグエンディアンへの変換', () => {
        const little = new Uint32Array([0x12345678]);
        const big = new Uint32Array([0x78563412]);

        const result = littleToBig(little);

        expect(result).toEqual(big);
    });

    test('ビッグエンディアンからリトルエンディアンへの変換', () => {
        const big = new Uint32Array([0x78563412]);
        const little = new Uint32Array([0x12345678]);

        const result = bigToLittle(big);

        expect(result).toEqual(little);
    });
});
