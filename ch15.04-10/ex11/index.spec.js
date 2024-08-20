import { test, expect } from "@playwright/test";

async function gotoTestTarget(page) {
  await page.goto("/ch15.04-10/ex11/index.html");
}

test.describe('フィルタリングを検証する', () => {
  test.beforeEach(async ({ page }) => {
    await gotoTestTarget(page);

    // テストデータ作成
    await page.fill('#new-todo', '勤怠');
    await page.click('#new-todo-form button');
    await page.fill('#new-todo', '飲み会出欠');
    await page.click('#new-todo-form button');
    await page.fill('#new-todo', '研修準備');
    await page.click('#new-todo-form button');

    // 一番上のタスクをチェック済みにする
    const todoItem = page.locator('#todo-list li').first();
    await todoItem.locator('input[type="checkbox"]').check();
  });

  test('Allのフィルタリングが正常に動作する', async ({ page }) => {
    // フィルタを「All」に設定
    await page.goto('#/');

    // すべてのタスクが表示されていることを確認
    const todos = page.locator('#todo-list li');
    await expect(todos).toHaveCount(3);
  });

  test('Activeのフィルタリングが正常に動作する', async ({ page }) => {
    // フィルタを「Active」に設定
    await page.goto('#/active');

    // 完了していないタスクのみが表示されていることを確認
    const activeTodos = page.locator('#todo-list li:not(.completed)');
    await expect(activeTodos).toHaveCount(2);
    await expect(activeTodos.nth(0)).toHaveText('飲み会出欠');
    await expect(activeTodos.nth(1)).toHaveText('研修準備');
  });

  test('Completedのフィルタリングが正常に動作する', async ({ page }) => {
    // フィルタを「Completed」に設定
    await page.goto('#/completed');

    // 完了したタスクのみが表示されていることを確認
    const completedTodos = page.locator('#todo-list li.completed');
    await expect(completedTodos).toHaveCount(1);
    await expect(completedTodos.first()).toHaveText('勤怠');
  });
});
