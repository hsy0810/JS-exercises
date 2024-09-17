const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

// indexedDBを開く
function withDB(callback) {
  const request = indexedDB.open('todoApp', 1);
  request.onerror = console.error;
  request.onsuccess = () => {
    const db = request.result;
    callback(db);
  };
  request.onupgradeneeded = () => {
    initDB(request.result);
  };
}

// 初期化
function initDB(db) {
  if (!db.objectStoreNames.contains('todos')) {
    db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
  }
}

// ToDo を indexedDB に保存する
const save = (todo) => {
  withDB((db) => {
    const transaction = db.transaction('todos', 'readwrite');
    const store = transaction.objectStore('todos');
    store.put(todo); 
  });
};

// ToDo を indexedDB から読み込む
const load = (callback) => {
  withDB((db) => {
    const transaction = db.transaction('todos', 'readonly');
    const store = transaction.objectStore('todos');
    const request = store.getAll();
    request.onsuccess = () => {
      callback(request.result);
    };
  });
};

// ToDo アイテムをリストに追加する
const render = (todo) => {
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = todo.text;
  label.style.textDecorationLine = todo.completed ? "line-through" : "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.checked = todo.completed;
  toggle.addEventListener("change", () => {
    label.style.textDecorationLine = toggle.checked ? "line-through" : "none";
    todo.completed = toggle.checked;
    save(todo); 
  });

  const destroy = document.createElement("button");
  destroy.textContent = "❌";
  destroy.addEventListener("click", () => {
    list.removeChild(elem);
    withDB((db) => {
      const transaction = db.transaction('todos', 'readwrite');
      const store = transaction.objectStore('todos');
      store.delete(todo.id); 
    });
  });

  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
  list.prepend(elem);
};

// フォーム送信時の処理
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value.trim() === "") {
    return;
  }
  
  const todo = { text: input.value.trim(), completed: false };
  input.value = "";
  render(todo);
  save(todo);
});

// ページロード時に ToDo を読み込む
const loadAndRender = () => {
  load((todos) => {
    list.innerHTML = '';
    todos.forEach(render);
  });
};
loadAndRender();

// タブ間での同期処理
channel.onmessage = (event) => {
  if (event.data === 'todoChanged') {
    loadAndRender();
  }
};
