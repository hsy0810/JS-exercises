import { getAndSet } from "./index.js";

describe("getAndSet", () => {
    it("デカルト座標を取得する", async () => {
        const newLocation = getAndSet(1.0, 1.0);

        expect(newLocation.r).toBe(1.4142135623730951); 
        expect(newLocation.theta).toBe(0.7853981633974483); 
    });
  });