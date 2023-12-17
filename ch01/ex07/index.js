export class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    distance() {
        return Math.sqrt(
            this.x * this.x + this.y * this.y
        );
    }

    add(newPoint) {
        this.x += newPoint.x;
        this.y += newPoint.y;
        return this;
    }
}

let p = new Point(1, 1);
let p2 = new Point(2, 3);
p.distance();
p.add(p2);