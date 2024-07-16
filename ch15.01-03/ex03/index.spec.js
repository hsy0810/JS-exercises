import { test, expect } from '@playwright/test';

function gotoTestTarget(page) {
    return page.goto("/ch15.01-03/ex03/index.html");
  }

test.describe('Integrity属性をテストする', () => {
  test.beforeEach(async ({ page }) => {
    await gotoTestTarget(page);
  });

  test('適切な integrity 値の場合はロードされる', async ({ page }) => {
      const paragraphText = await page.textContent('p');
      expect(paragraphText).toBe('JavaScirpt!');
  });

  test('適切でない integrity 値の場合はロードされない', async ({ page }) => {
    await page.evaluate(() => {
        const script = document.querySelector('script[type="module"]');
        if (script) {
          script.setAttribute('integrity', 'sha256-invalidhashvalue'); // 不正なハッシュ値
        }
      });

      const paragraphText = await page.textContent('p');
      expect(paragraphText).toBe('');
  });
});