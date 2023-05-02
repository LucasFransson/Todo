class TodoItem {

	//Constructor
	constructor(content, isCompleted) {
		this.content = content;
		this.isCompleted = isCompleted;
	}
	// Class Methods
	printContent() {
		console.log(content);
	}

	static createTodoItem(content,isCompleted) {

		// Create TodoItem from input parameters
		if(isCompleted)	// If 'isCompleted' has trutly value (!null/undefined/'',false,NaN,0)
		{
			const todoItem = new TodoItem(content,isCompleted);
			return todoItem;
		}
		else {	
		const todoItem = new TodoItem(content, false);	// set 'isCompleted' to false
		return todoItem;
		}
	}

	static setCompletedToTrue (todoItem) {
		todoItem.isCompleted=true;
		// let todoItemElement = document.getElementById(`todo-item-${todoItem.id}`);
		// todoItemElement.classList.add('todo-item-completed');
		}

	static setCompletedToFalse(todoItem) {
		todoItem.isCompleted=false;
		// let todoItemElement = document.getElementById(`todo-item-${todoItem.id}`);
		// todoItemElement.classList.remove('todo-item-completed');
	}

}

export default TodoItem;
