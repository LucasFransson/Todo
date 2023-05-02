import TodoItem from '../Models/TodoItem.js';
import TodoRepository from '../Repositories/TodoRepository.js';

class ElementBuilder {


	static renderTodoItemElement(inputContent,inputIsCompleted, parentId) {
		// Create TodoItem from input parameters
		const todoItem = TodoItem.createTodoItem(inputContent,inputIsCompleted)
		// Create a html Element based upon the new TodoItem
		const todoItemElement = ElementBuilder.createTodoItemElement(todoItem);

		// Get and append Todo Item to parent element
		const parentElement = document.getElementById(parentId);
		parentElement.appendChild(todoItemElement);
	}
	
	static createTodoItemElement(todoItem) {
		// Create div and assign CSS classes
		const todoItemElement = document.createElement('div');
		todoItemElement.classList.add('todo-item', 'flex-row-container');
		todoItemElement.id = `todo-item-${todoItem.id}`;

		// Create checkbox (& label for styling) and append to div
		const checkbox = document.createElement('input');
		checkbox.id = 'checkbox-' + todoItem.id; // Set the ID based on the todoItem ID
		checkbox.type = 'checkbox';
		checkbox.classList.add('todo-item-checkbox');
		todoItemElement.appendChild(checkbox);

		const checkboxLabel = document.createElement('label');
		checkboxLabel.setAttribute('for', checkbox.id); // Set the 'for' attribute to match the checkbox ID
		checkboxLabel.classList.add('checkbox-label');
		todoItemElement.appendChild(checkboxLabel);

		// Create <p> paragraph and append to div
		const contentParagraph = document.createElement('p');
		contentParagraph.textContent = todoItem.content;
		todoItemElement.appendChild(contentParagraph);

		//Create <button> for Deletion
		const deleteButton = document.createElement('button');
		deleteButton.innerText ='X';
		deleteButton.classList.add('delete-button');
		deleteButton.id = `delete-button-${todoItem.id}`;
		todoItemElement.appendChild(deleteButton);

		 // Set the initial completed state
		if (todoItem.isCompleted) {
			checkbox.checked=true;
			todoItemElement.classList.add('todo-item-completed');
		}

		// Event Listeners for dynamically created elements
  		checkbox.addEventListener('change', toggleCompletedState);		// Add an event listener to the checkbox

		  deleteButton.addEventListener('click', () => TodoRepository.deleteTodoItemAsync(todoItem));

		// Functions
  		function toggleCompletedState() {		// Function to toggle the completed state
    		todoItemElement.classList.toggle('todo-item-completed');
  		}

		return todoItemElement;
	}
}
export default ElementBuilder;
