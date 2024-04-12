import { C1, C2 } from "./index.js"; // ts でも可

test("C1", () => {
  const c = new C1();
  expect(c.getX()).toBe(42);
});

test("C2", () => {
    const c = new C2();
    expect(c.getX()).toBe(42);
  });