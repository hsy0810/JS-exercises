import { expect, test } from "@playwright/test";

/**
 * @param {import("@playwright/test").Page} page
 * @param {string} todo
 */
async function addToDo(page, todo) {
  await page.getByRole("textbox").fill(todo);
  await page.getByRole("button", { name: "Add" }).click();
  await page.waitForTimeout(500);
}

/**
 * @param {import("@playwright/test").Page} page
 * @param {number} index
 */
async function deleteToDo(page, index) {
  await page
    .getByRole("listitem")
    .nth(index)
    .getByRole("button", { name: "❌" })
    .click();
}

/**
 * @param {import("@playwright/test").Page} page
 */
async function countToDos(page) {
  return await page.getByRole("listitem").count();
}

/**
 * @param {import("@playwright/test").Page} page
 * @param {number} index
 */
function queryToDo(page, index) {
  return page.getByRole("listitem").nth(index);
}

test.describe("simple todo app", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/ch15.11-15/ex05");

  });

  test("no default todos", async ({ page }) => {
    expect(await countToDos(page)).toBe(0);
  });

  test("add new todo", async ({ page }) => {
    await addToDo(page, "質問表に質問を記載する");

    expect(await countToDos(page)).toBe(1);

    const todo = queryToDo(page, 0);
    const label = todo.getByText("質問表に質問を記載する");
    await expect(label).toBeVisible();
    await expect(label).toHaveCSS("text-decoration-line", "none");

    // ページリロード
    await page.reload();
    expect(await countToDos(page)).toBe(1);

    const reloadedTodo = queryToDo(page, 0);
    const reloadedLabel = reloadedTodo.getByRole("textbox", { name: "質問表に質問を記載する" });
    await expect(reloadedLabel).toBeVisible();
  });

  test("delete todo", async ({ page }) => {
    await addToDo(page, "質問表に質問を記載する");
    await addToDo(page, "練習問題を完了する");

    //2つ目のタブを開く
    const newTab = await page.context().newPage();
    await newTab.goto("/ch15.11-15/ex05");
    
    // 1つ目のタブで ToDo を削除
    await deleteToDo(page, 0);
    expect(await countToDos(page)).toBe(1);
    // 2つ目のタブで ToDo の数が正しいか確認
    expect(await countToDos(newTab)).toBe(1);
    const deletedTodo = queryToDo(newTab, 0);
    await expect(deletedTodo).not.toHaveText("質問表に質問を記載する");
  });
});
