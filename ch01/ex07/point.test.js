import {Point} from "./point.js";

describe("Point", () => {
    describe("distance", () => {
      it("原点からの距離を計算する", () => {
        const p = new Point(3, 4); 
        expect(p.distance()).toBe(5); 
      });
    });
    describe("add", () => {
      it("引数として渡された `Point` クラスのインスタンスの座標を自分の座標に加算する", () => {
        const p = new Point(1, 1);
        const p2 = new Point(2, 3);
        const expectedPoint = { x: 3, y: 4 };

        const resultPoint = p.add(p2);

        expect(resultPoint.x).toBe(expectedPoint.x); 
        expect(resultPoint.y).toBe(expectedPoint.y); 
      });
    });
});  