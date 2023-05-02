import ElementBuilder from '../Managers/ElementBuilder.js';

class TodoRepository {

	// Field Variables
	static HTTP_ROUTE = 'http://localhost:3000/todoItems';
	
	static getHTTPRouteId (item) {
		return `http://localhost:3000/todoItems/${item.id}`;
	}

	
	// class methods
	
	// Get All Todo Items
	static getAllTodoItemsAsync() {				// Fetch Items from DB and return as an Array
		return fetch(TodoRepository.HTTP_ROUTE)
			.then((response) => response.json())
			.then((data) => {
				return data;
			})
			.catch((error) => {
				console.error('Error occurred while fetching todo items:', error);
				return [];
			});
	}

	// Add Todo Item
	static async addTodoItemAsync(todoItem) {
		return fetch(TodoRepository.HTTP_ROUTE, {
		  method: 'POST',
		  headers: { 'Content-Type': 'application/json' },
		  body: JSON.stringify({
			content: todoItem.content,
			isCompleted: todoItem.isCompleted
		  }),
		})
		.catch((error) => {
			console.error('Error occurred while adding a todo item:', error);
			throw error; 
		});
	  }
	
	// Update Todo Item
	static async updateTodoItemAsync(todoItem) {
		return fetch(TodoRepository.getHTTPRouteId(todoItem),{
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				content: todoItem.content,
				isCompleted: todoItem.isCompleted,
				id:todoItem.id
			}),
		})
			.then((response) => {
				if (!response.ok) {
				  throw new Error('Failed to update todo item');
				}
				// Optionally, you can return the updated todo item if it's available in the response
				return response.json();
			  })
			  .catch((error) => {
				console.error('Error occurred while updating a todo item:', error);
				throw error; 
			  });
	}

	// Delete Todo Item
	static async deleteTodoItemAsync(todoItem){
		return fetch(TodoRepository.getHTTPRouteId(todoItem),{
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({})
		})
		.then((response)=> {
			if(!response.ok) {
				throw new Error('Failed to delete Todo Item: ', error)
			}
			else {
				console.log(`Todo Item ${todoItem.content} was Deleted!`);
				return response.json();
			}
		})
		.catch((error)=> {
			console.error('Error occured when deleting Todo Item: ',error);
			throw error;
		});
	}
}

// export module
export default TodoRepository;
