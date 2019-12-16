class TodoList {
  constructor() {
    this.STORE_KEY = 'TodoData';
    this.todoList = this.todos;
  }

  /**
  * Return todos from localStorage
  * @return {any} todoList
  */
  get todos() {
    return JSON.parse(localStorage.getItem(this.STORE_KEY)) || [];
  }

  /**
  * Store todos in localStorage
  * @param  {TodoListModel} data todos
  */
  set todos(data) {
    localStorage.setItem(this.STORE_KEY, JSON.stringify(data));
  }

  /**
  * add a todo to the todoList in the localStorage
  * @param {any} todo todo object
  */
  add(todo) {
    const newTodo = todo;
    newTodo.id = this.todoList.length + 1;
    this.todoList.push(newTodo);
    this.todos = this.todoList;
  }

  /**
  * Remove 1 todo from the storage
  * @param {TodoModel} id index of the todo in the storage
  */
  remove(id) {
    this.todos = this.todos.filter(item => item.id !== id);
    console.log(this.todos, 'aa');
  }
}

export default TodoList;
