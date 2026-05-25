const todos = [];

function addTodo(todo) {
  todos.push(todo);
}

function removeTodo(index) {
  todos.splice(index, 1);
}

function listTodos() {
  todos.forEach((todo, index) => console.log(`${index}: ${todo}`));
}

addTodo("Buy groceries");
addTodo("Walk the dog");
addTodo("Read a book");

removeTodo(1);

listTodos();
