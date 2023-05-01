import ElementBuilder from '../Managers/ElementBuilder.js';
import TodoItem from '../Models/TodoItem.js';
import TodoRepository from '../Repositories/TodoRepository.js';

// Field Variables
const CURRENT_TODO_BUTTON_ADD = document.querySelector('#btn-add');
const CURRENT_TODO = document.querySelector('#todays-todo');
const CURRENT_TODO_INPUT = document.getElementById('todays-todo-input');


// Start of Program
	// ALT 1: Fetch all Todos from DB & display them( Arrow Function Syntax )
// TodoRepository.getAllTodoItemsAsync().then((data) =>
// 	data.forEach((item) => {
// 		ElementBuilder.createTodo(item.content, CURRENT_TODO.id);
// 	})
// );

	// ALT 2: Fetch all Todos from DB
let todoItems = await TodoRepository.getAllTodoItemsAsync(); // Assign value to object then Read

todoItems.forEach((item) => ElementBuilder.createTodo(item.content, CURRENT_TODO.id) // Then Append & Display the Todos
);


// Event Listeners & Initilization
	// Create Todo Button for Current Todo Container
CURRENT_TODO_BUTTON_ADD.addEventListener('click', () => {
	const inputContent = CURRENT_TODO_INPUT.value;
	const parentId = CURRENT_TODO.id;

	// Create Todo-item & Append to Parent Div
	ElementBuilder.createTodo(inputContent, parentId);

	// Clear the Text Input Field
	clearElementValue(CURRENT_TODO_INPUT);
});

// Functions (Shorter functions for handling UI)
function clearElementValue(element) {
	element.value = '';
}
