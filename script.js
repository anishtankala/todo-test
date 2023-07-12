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
const clearCompletedButton = document.getElementById("clear-completed-button");

// Add event listener to the add button
// addButton.addEventListener('click', addTodo);
addButton.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
      const todoItem = document.createElement('li');
      todoItem.classList.add('todo-item');
      todoItem.innerHTML = `
        <input type="checkbox">
        <span>${todoText}</span>
      `;
      todoList.appendChild(todoItem);
      todoInput.value = '';
    }
  });

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

// Add click event listener to the clear completed button
clearCompletedButton.addEventListener("click", clearCompletedTodos);

// Function to clear completed todos
function clearCompletedTodos() {
  // Get the todo list element
  const todoList = document.getElementById("todo-list");

  // Get all todo items
  const todoItems = todoList.getElementsByClassName("todo-item");

  // Create an array to store the completed todo items
  const completedItems = [];

  // Loop through each todo item
  for (let i = 0; i < todoItems.length; i++) {
    const todoItem = todoItems[i];

    // Check if the todo item is completed
    const checkbox = todoItem.querySelector("input[type='checkbox']");
    if (checkbox.checked) {
      // Add the completed todo item to the array
      completedItems.push(todoItem);
    }
  }

  // Remove the completed todo items from the todo list
  completedItems.forEach((item) => {
    item.remove();
  });
}