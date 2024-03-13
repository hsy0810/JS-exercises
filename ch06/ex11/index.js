export function getAndSet(x, y) {
    let location = {
        x:x,
        y:y,
        get r() {
            return Math.hypot(this.x, this.y);
        },
        set r(newvalue) {
        
                let oldvalue = Math.hypot(this.x, this.y);
                let ratio = newvalue/oldvalue;
                this.x *= ratio;
                this.y *= ratio;           
        },

        get theta() { 
            return Math.atan2(this.y, this.x);
        }
    }
    return location;
}

let x = 1.0;
let y = 1.0;
let newLocation = getAndSet(x,y);
console.log({
    x: newLocation.x,
    y: newLocation.y,
    r: newLocation.r,
    theta: newLocation.theta,
});