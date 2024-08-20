import { test, expect } from "@playwright/test";

function gotoTestTarget(page) {
    return page.goto("/ch15.04-10/ex05/index.html");
  }

test.describe('inLineCircleを利用する', () => {
  test.beforeEach(async ({ page }) => {
    await gotoTestTarget(page);
  });

  test('border-colorがレンダリングされる', async ({ page }) => {
    // カスタム要素を選択
    const red = await page.locator('inline-circle[border-color="red"]');
    const blue = await page.locator('inline-circle[border-color="blue"]');

    // 要素のスタイルを直接取得
    const result1 = await red.evaluate((element) => {
      return getComputedStyle(element).borderColor;
    });

    const result2 = await blue.evaluate((element) => {
      return getComputedStyle(element).borderColor;
    });

    // border-color の検証
    await expect(result1).toBe('rgb(255, 0, 0)'); // 赤色
    await expect(result2).toBe('rgb(0, 0, 255)'); // 青色
});
});

