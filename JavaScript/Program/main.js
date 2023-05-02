import ElementBuilder from '../Managers/ElementBuilder.js';
import TodoItem from '../Models/TodoItem.js';
import TodoRepository from '../Repositories/TodoRepository.js';

// Field Variables
const CURRENT_TODO_BUTTON_ADD = document.querySelector('#btn-add');
const CURRENT_TODO = document.querySelector('#todays-todo');
const CURRENT_TODO_INPUT = document.getElementById('todays-todo-input');


// Start of Program

	// ALT 2: Fetch all Todos from DB
// let todoItems = await TodoRepository.getAllTodoItemsAsync(); 

// todoItems.forEach((item) => ElementBuilder.renderTodoItemElement(item.content,item.isCompleted, CURRENT_TODO.id) // Then Append & Display the Todos
// );

// ALT 2: Fetch all Todos from DB
let todoItems = await TodoRepository.getAllTodoItemsAsync(); // Assign value to object then Read
todoItems.forEach((item) => {
	const todoItemElement = ElementBuilder.createTodoItemElement(item); // Then Append & Display the Todos
	CURRENT_TODO.appendChild(todoItemElement);
  });

 
// Event Listeners & Initilization

	// Create Todo Button for Current Todo Container
CURRENT_TODO_BUTTON_ADD.addEventListener('click', async() => {
	// Create Todo-item & Append to Parent Div
	const todoItem = TodoItem.createTodoItem(CURRENT_TODO_INPUT.value, false);
	const todoItemElement = ElementBuilder.createTodoItemElement(todoItem);
	CURRENT_TODO.appendChild(todoItemElement);
  
	// Pass to Repo & Add to DB
	await TodoRepository.addTodoItemAsync(todoItem);
  
	// Clear the Text Input Field
	clearElementValue(CURRENT_TODO_INPUT);
    //displayAllTodoItems(); // Call Display Function for updating page
  });

  
// Functions (Shorter functions for handling UI)
function clearElementValue(element) {
	element.value = '';
}

// Call Repo & Get all TodoItems from DB, then call ElementBuilder and render TodoItems on page
function displayAllTodoItems() {
	TodoRepository.getAllTodoItemsAsync().then((data) =>
	  data.forEach((item) => {
		const todoItemElement = ElementBuilder.createTodoItemElement(item);
		CURRENT_TODO.appendChild(todoItemElement);
	  })
	);
  }
  