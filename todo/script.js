let input = document.getElementById("task_input");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function PendingToDone(id) {
  let newTodo = todos.map((todo) => {
    if (todo.id == id) {
      return { ...todo, status: "done" };
    } else return todo;
  });
  todos = newTodo;
  localStorage.setItem("todos", JSON.stringify(todos));
  displayTodos();
}

function DeleteTodo(id) {
  let newTodo = todos.filter((todo) => todo.id != id);
  todos = newTodo;
  localStorage.setItem("todos", JSON.stringify(todos));
  displayTodos();
}
function displayTodos() {
  list.innerHTML = "";
  todos.forEach((todo) => {
    let div = document.createElement("div");
    div.className = "todo_item";
    div.innerHTML = `

        <span>${todo.text}</span>
        <span>${todo.status}</span>
        <div>
             <span onClick="PendingToDone(${todo.id})">✔</span>
             <span onClick="DeleteTodo(${todo.id})">X</span>
        </div>
      `;
    list.appendChild(div);
  });
}

function addTodos(text) {
  let task = {
    id: Date.now(),
    text,
    status: "pending",
  };
  //   let newTodo = [...todos, task];
  //   todos = newTodo;
  todos.push(task);
  localStorage.setItem("todos", JSON.stringify(todos));
  input.value = "";
  displayTodos();
}

displayTodos();

addBtn.addEventListener("click", function () {
  if (input.value) addTodos(input.value);
});
