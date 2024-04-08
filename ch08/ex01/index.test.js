import { createArray, factorial, getCurrentTime } from "./index.js";

test("createArray", () => {
    expect(createArray(3,"c")).toEqual([ 'c', 'c', 'c' ]);
  });

test("factorial", () => {
    expect(factorial(5)).toBe(25);
  });

  test("getCurrentTime", () => {
    const now = new Date();
    const currentTime = getCurrentTime();
    expect(currentTime.now).toEqual(now);
  });