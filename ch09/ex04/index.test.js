import { Warrior1, Warrior2, MagicWarrior1, MagicWarrior2 } from "./index.js";

test("Warrior1", () => {
    const warrior = new Warrior1(10);
  expect(warrior.attack()).toBe(20);
});

test("MagicWarrior1", () => {
    const magicWarrior = new MagicWarrior1(10, 5);
    expect(magicWarrior.attack()).toBe(25);
  });

  test("Warrior2", () => {
    const warrior = new Warrior2(10);
  expect(warrior.attack()).toBe(20);
});

test("MagicWarrior2", () => {
    const magicWarrior = new MagicWarrior2(10, 5);
    expect(magicWarrior.attack()).toBe(25);
  });