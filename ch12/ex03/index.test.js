import { counterGen } from "./index.js";

test('throw()を使ってリセットを行うカウンタ', () => {
    const counter = counterGen();

    expect(counter.next().value).toBe(0);
    expect(counter.next().value).toBe(1);

    counter.throw('reset');
    
    expect(counter.next().value).toBe(0);
    expect(counter.next().value).toBe(1);
});

