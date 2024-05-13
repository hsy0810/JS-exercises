import { retryWithExponentialBackoff } from "./index.js";

describe('retryWithExponentialBackoff', () => {
  const callback = jest.fn();

  test('funcが1回呼び出され、callbackがtrueを受け取る', () => {
    const func = jest.fn(() => true);
    retryWithExponentialBackoff(func, 3, callback);

    expect(func).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(true);
  });

  test('funcが3回呼び出され、最後にcallbackがfalseを受け取る', () => {
    const func = jest.fn(() => false); 
    retryWithExponentialBackoff(func, 3, callback);

    expect(func).toHaveBeenCalledTimes(3);
    expect(callback).toHaveBeenCalledWith(false);
  });
});
