// // Get DOM elements
// const todoInput = document.getElementById('todo-input');
// const addButton = document.getElementById('add-button');
// const todoList = document.getElementById('todo-list');

// // Add event listener to the add button
// addButton.addEventListener('click', addTodo);

// // Function to add a new todo
// function addTodo() {
//   const todoText = todoInput.value;
//   if (todoText) {
//     const todoItem = createTodoItem(todoText);
//     todoList.appendChild(todoItem);
//     todoInput.value = '';
//   }
// }

// // Function to create a new todo item
// function createTodoItem(todoText) {
//   const todoItem = document.createElement('li');
//   todoItem.classList.add('todo-item');

//   const checkbox = document.createElement('input');
//   checkbox.type = 'checkbox';

//   const todoTextSpan = document.createElement('span');
//   todoTextSpan.textContent = todoText;

//   todoItem.appendChild(checkbox);
//   todoItem.appendChild(todoTextSpan);

//   return todoItem;
// }

// Get DOM elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
const clearButton = document.getElementById('clear-button');

// Add event listener to the add button
addButton.addEventListener('click', addTodo);

// Add event listener to the todo input for Enter key press
todoInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});

clearButton.addEventListener('click', () => {
    todoList.innerHTML = '';
});

// Function to add a new todo
function addTodo() {
  const todoText = todoInput.value;
  if (todoText) {
    const todoItem = createTodoItem(todoText);
    todoList.appendChild(todoItem);
    todoInput.value = '';
  }
}

// Function to create a new todo item
function createTodoItem(todoText) {
  const todoItem = document.createElement('li');
  todoItem.classList.add('todo-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const todoTextSpan = document.createElement('span');
  todoTextSpan.textContent = todoText;

  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoTextSpan);

  return todoItem;
}
