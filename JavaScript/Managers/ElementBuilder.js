import TodoItem from '../Models/TodoItem.js';

class ElementBuilder {

	static createTodo(inputContent, parentId) {
		// Create TodoItem from input parameters
		const todoItem = new TodoItem(inputContent, false);
		const todoItemElement = ElementBuilder.createTodoItemElement(todoItem);

		// Get and append Todo Item to parent element
		const parentElement = document.getElementById(parentId);
		parentElement.appendChild(todoItemElement);
	}

	static createTodoItemElement(todoItem) {
		// Create div and assign CSS classes
		const todoItemElement = document.createElement('div');
		todoItemElement.classList.add('todo-item', 'flex-row-container');

		// Create checkbox and append to div
		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		todoItemElement.appendChild(checkbox);

		// Create <p> paragraph and append to div
		const contentParagraph = document.createElement('p');
		contentParagraph.textContent = todoItem.content;
		todoItemElement.appendChild(contentParagraph);

		return todoItemElement;
	}
}
export default ElementBuilder;
