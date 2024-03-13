import {jest} from '@jest/globals';

describe("JSON", () => {
  it("toJSON", async () => {
    const mock = jest.fn();

    const obj = {
      x: 0,
      y: 0,
      sum() {
        mock();
        return this.x + this.y;
      },
    };
    
    // ここに１行のコードを書く
    obj.toJSON = function() {return {x:this.x, y:this.y, sum:this.sum()};};
    obj.x = 1;
    obj.y = 2;
    expect(JSON.stringify(obj)).toBe(`{"x":1,"y":2,"sum":3}`);
    expect(mock).toHaveBeenCalled();
  });
});