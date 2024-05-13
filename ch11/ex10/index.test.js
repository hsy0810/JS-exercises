import { getDays, getWeekdays, getDayOfWeek, getMyDate } from "./index.js";

test("getDays", () => {

    expect(getDays(2011, 5)).toBe(31);
});

test("getWeekdays", () => {

    expect(getWeekdays('2024-05-01', '2024-05-31')).toBe(23);
    expect(getWeekdays('2023-05-01', '2024-05-31')).toBe(285);
    expect(getWeekdays('2024-05-01', '2024-05-32')).toBe(0);
});

test("getDayOfWeek", () => {

    expect(getDayOfWeek('2024-12-25', 'en-US')).toBe('Wednesday');
    expect(getDayOfWeek('2024年12月25日', 'en-US')).toBe('Invalid Date');
    expect(getDayOfWeek('2024-12-25', 'ja-JP')).toBe('水曜日');
});

test("getMyDate", () => {
    const date = new Date();
    const firstDayOfThisMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstDayOfLastMonth = new Date(firstDayOfThisMonth - 1);
    firstDayOfLastMonth.setHours(0, 0, 0, 0);
    const expectedDate = firstDayOfLastMonth;
    expect(getMyDate()).toEqual(expectedDate);
});
