const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

// リトライ
async function retryWithExponentialBackoff(func, maxRetry, callback) {
  let retryCount = 0;

  async function retry() {
    try {
      const result = await func(); 
      if (result) {
        callback(true); // 成功時
      } else if (retryCount < maxRetry) {
        retryCount++;
        setTimeout(retry, Math.pow(2, retryCount) * 1000); 
      } else {
        callback(false); // 最大リトライ回数に到達
      }
    } catch (error) {
      if (retryCount < maxRetry) {
        retryCount++;
        setTimeout(retry, Math.pow(2, retryCount) * 1000); 
      } else {
        callback(false); // 最大リトライ回数に到達
      }
    }
  }

  retry();
}

// 通信やリトライが完了するまで ユーザ操作ができない
function disableUI(disabled) {
  input.disabled = disabled;
  document.querySelectorAll("button").forEach(btn => btn.disabled = disabled);
  document.querySelectorAll("input[type='checkbox']").forEach(cb => cb.disabled = disabled);
}

async function fetchWithRetry(url, options = {}) {
  return new Promise((resolve, reject) => {
    retryWithExponentialBackoff(
      () => fetch(url, options),
      3, // 最大リトライ回数
      (success) => {
        if (success) {
          resolve(fetch(url, options)); // 最後に成功したら解決
        } else {
          reject(new Error("Failed after multiple retries.")); // 最大リトライ回数に到達したら失敗
        }
      }
    );
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  disableUI(true); // 通信中は操作できない
  try {
    const response = await fetchWithRetry("/api/tasks");
    const data = await response.json();
    data.items.forEach(task => appendToDoItem(task));
  } catch (error) {
    alert(error.message);
  } finally {
    disableUI(false); // 通信完了後に操作ができるようになる
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const todo = input.value.trim();
  if (todo === "") return;
  input.value = "";
  disableUI(true);

  try {
    const response = await fetchWithRetry("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: todo })
    });
    const newTask = await response.json();
    appendToDoItem(newTask);
  } catch (error) {
    alert(`Error creating task: ${error.message}`);
  } finally {
    disableUI(false);
  }
});

function appendToDoItem(task) {
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = task.name;
  label.style.textDecorationLine = "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.checked = task.status === "completed";

  toggle.addEventListener("change", async () => {
    disableUI(true);
    try {
      const response = await fetchWithRetry(`/api/tasks/${task.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: toggle.checked ? "completed" : "active" })
      });

      const updatedTask = await response.json();
      label.style.textDecorationLine = updatedTask.status === "completed" ? "line-through" : "none";
    } catch (error) {
      alert(`Error updating task: ${error.message}`);
      toggle.checked = task.status === "completed";
    } finally {
      disableUI(false);
    }
  });

  const destroy = document.createElement("button");
  destroy.textContent = "Delete";

  destroy.addEventListener("click", async () => {
    disableUI(true);
    try {
      const response = await fetchWithRetry(`/api/tasks/${task.id}`, {
        method: "DELETE"
      });

      if (response.ok) {
        elem.remove();
      } else {
        const errorData = await response.json();
        alert(`Error deleting task: ${errorData.message}`);
      }
    } catch (error) {
      alert(`Error deleting task: ${error.message}`);
    } finally {
      disableUI(false);
    }
  });

  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
  list.prepend(elem);
}
