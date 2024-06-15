import { retryWithExponentialBackoff } from "./index.js";

test('resolve', async () => {
    const resp = await retryWithExponentialBackoff(
        () => fetch("https://example.com"),
        5
      );

      expect(resp.status).toBe(200);
  });

