import { fetchSumOfFileSizes } from "./index.js";

describe('fetchSumOfFileSizes', () => {
    test('return totalsize when is not empty', async () => {
        const path = 'ch13/ex02/';
        const expectedSize = 8076;
        const result = await fetchSumOfFileSizes(path);

        expect(result).toBe(expectedSize);
    });

    test('return 0 when is empty', async () => {
        const path = 'ch13/ex13/';
        const result = await fetchSumOfFileSizes(path);

        expect(result).toBe(0);
    });

    test('return error', async () => {
        const path = 'ch13/ex18/';
        try {
            await fetchSumOfFileSizes(path);
        } catch (err) {
            expect(err).toBeDefined();
            expect(err.code).toBe('ENOENT');
        }
    });
});