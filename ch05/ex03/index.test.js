import { IsHoliday1, IsHoliday2 } from "./index.js";

describe("IsHoliday1", () => {
  it("休日か平日", async () => {
    const day1 = IsHoliday1("土");
    expect(day1).toBe(true);
    const day2 = IsHoliday1("日");
    expect(day2).toBe(true);
    const day3 = IsHoliday1("木");
    expect(day3).toBe(false);
  });
});

describe("IsHoliday2", () => {
    it("休日か平日", async () => {
        const day1 = IsHoliday2("土");
        expect(day1).toBe(true);
        const day2 = IsHoliday2("日");
        expect(day2).toBe(true);
        const day3 = IsHoliday2("木");
        expect(day3).toBe(false);
    });
  });