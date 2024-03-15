import { sort } from "./index.js";
const array = [5, 3, 8, 6, 2];

test("sort", () => {
    expect(sort(array)).toStrictEqual([ 2, 3, 5, 6, 8]);
});