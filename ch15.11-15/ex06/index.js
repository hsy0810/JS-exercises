const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

// ローカルストレージから ToDo アイテムを読み込む
function load() {
  const savedToDos = JSON.parse(sessionStorage.getItem("todos")) || [];
  savedToDos.forEach(todo => {
    // ToDo アイテムをリストに追加
    const elem = document.createElement("li");

    const label = document.createElement("label");
    label.textContent = todo.text;
    label.style.textDecorationLine = todo.completed ? "line-through" : "none";

    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.checked = todo.completed;
    toggle.addEventListener("change", () => {
      label.style.textDecorationLine = toggle.checked ? "line-through" : "none";
      save(); // 状態変更後に保存
    });

    const destroy = document.createElement("button");
    destroy.textContent = "❌";
    destroy.addEventListener("click", () => {
      list.removeChild(elem);
      save(); // アイテム削除後に保存
    });

    elem.appendChild(toggle);
    elem.appendChild(label);
    elem.appendChild(destroy);
    list.prepend(elem);
  });
}

// ローカルストレージに ToDo アイテムを保存する
function save() {
  const todos = [];
  list.querySelectorAll("li").forEach(li => {
    const text = li.querySelector("label").textContent;
    const completed = li.querySelector("input").checked;
    todos.push({ text, completed });
  });
  sessionStorage.setItem("todos", JSON.stringify(todos));
}

// フォーム送信時の処理
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoText = input.value.trim();
  if (todoText === "") {
    return;
  }
  input.value = ""; // 入力フィールドをクリア

  // 新しい ToDo アイテムをリストに追加
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = todoText;
  label.style.textDecorationLine = "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.addEventListener("change", () => {
    label.style.textDecorationLine = toggle.checked ? "line-through" : "none";
    save(); 
  });

  const destroy = document.createElement("button");
  destroy.textContent = "❌";
  destroy.addEventListener("click", () => {
    list.removeChild(elem);
    save();
  });

  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
  list.prepend(elem);

  save();
});

load();
