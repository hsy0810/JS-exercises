import { test, expect } from "@playwright/test";

function gotoTestTarget(page) {
    return page.goto("/ch15.01-03/ex14/index.html");
  }

test.describe('ドロップダウンリストで選んだものだけが表示される', () => {
  test.beforeEach(async ({ page }) => {
    await gotoTestTarget(page);
  });

  test('"すべて"を選ぶとき、すべてのものが表示される', async ({ page }) => {
    await page.selectOption('select[data-testid="select"]', 'all');
    await expect(page.locator('li[data-testid="food1"]')).toBeVisible();
    await expect(page.locator('li[data-testid="stationery1"]')).toBeVisible();
    await expect(page.locator('li[data-testid="stationery2"]')).toBeVisible();
  });

  test('"食品"を選ぶとき、食品に属するものだけ表示される', async ({ page }) => {
    await page.selectOption('select[data-testid="select"]', 'food');
    await expect(page.locator('li[data-testid="food1"]')).toBeVisible();
    await expect(page.locator('li[data-testid="stationery1"]')).toBeHidden();
    await expect(page.locator('li[data-testid="stationery2"]')).toBeHidden();
  });

  test('"文房具"を選ぶとき、文房具に属するものだけ表示される', async ({ page }) => {
    await page.selectOption('select[data-testid="select"]', 'stationery');
    await expect(page.locator('li[data-testid="food1"]')).toBeHidden();
    await expect(page.locator('li[data-testid="stationery1"]')).toBeVisible();
    await expect(page.locator('li[data-testid="stationery2"]')).toBeVisible();
  });
});

