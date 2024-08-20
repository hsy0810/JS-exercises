const template = document.createElement("template");
template.innerHTML = `\
<style>
.completed {
  text-decoration: line-through;
}
</style>

<form id="new-todo-form">
  <input type="text" id="new-todo" placeholder="What needs to be done?" />
  <button>Add</button>
</form>
<ul id="todo-list"></ul>
`;

class TodoApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.form = this.shadowRoot.querySelector("#new-todo-form");
    // TODO: 残りを実装
    this.list = this.shadowRoot.querySelector("#todo-list")
    this.input = this.shadowRoot.querySelector("#new-todo");

    this.form.addEventListener("submit", this.addItem.bind(this));
  }

  addItem(event) {
    event.preventDefault();
    const todoText = this.input.value.trim();
    if (todoText === "") {
      return;
    }
    this.input.value = "";

    const li = document.createElement("li");
    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    const label = document.createElement("label");
    label.textContent = todoText;
    const destroy = document.createElement("button");
    destroy.textContent = "❌";

    toggle.addEventListener("change", () => {
      li.classList.toggle("completed", toggle.checked);
    });

    destroy.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(toggle);
    li.appendChild(label);
    li.appendChild(destroy);
    this.list.prepend(li);
  }

}

customElements.define("todo-app", TodoApp);





