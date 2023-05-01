import ElementBuilder from '../Managers/ElementBuilder.js';

class TodoRepository {

	// Field Variables
	static HTTP_ROUTE = 'http://localhost:3000/todoItems';

	// class methods
		// Fetch Items from DB and return as an Array
	static getAllTodoItemsAsync() {
		return fetch(TodoRepository.HTTP_ROUTE)
			.then((response) => response.json())
			.then((data) => {
				return data;
			})
			.catch((error) => {
				console.log('Error occurred while fetching todo items:', error);
				return [];
			});
	}

		// Post Item to DB
	static async addTodoItemAsync(inputContent) {
		return fetch(HTTP_ROUTE, {
		  method: 'POST',
		  headers: { 'Content-Type': 'application/json' },
		  body: JSON.stringify({
			content: inputContent,
			isCompleted: false
		  }),
		})
		.catch((error) => {
		  console.error('Error occurred while adding a todo item:', error);
		});
	  }

}

// export module
export default TodoRepository;
