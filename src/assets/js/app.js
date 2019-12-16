import $ from 'jquery';
import 'bootstrap-sass';
import TodoList from './todo/todoList';

class App {
  constructor() {
    this.todoList = new TodoList();
    console.log(this, this.todoList);

    // init jQuery elements
    this.$titleInput = $('#js-todo-title');
    this.$descriptionInput = $('#js-todo-description');
    this.$addButton = $('#js-add-todo');
    this.$todoList = $('.js-todo-list');

    this.selectors = {
      remove: '#remove-task',
      taskId: 'task-id',
    };

    // add event on add todo button
    this.$addButton.click(() => this.addTodo());
    // display todo box for each todo in localStorage
    this.todoList.todos.forEach(item => this.generateTodoElm(item));
  }

  static factory() {
    const ek = new App();
    return ek;
  }

  generateTodoElm(item) {
    this.$todoList.append(`
      <div class="todo-item" id="item-${item.id}">
        <p><strong>${item.title}</strong></p>
        <p>${item.description}</strong></p>
        <button id="remove-task-${item.id}" class="btn btn-danger" task-id="${item.id}">Remove</button>
      </div>
    `);
    const x = `#remove-task-${item.id}`;

    // add event on remove button
    $(`#remove-task-${item.id}`).click((ev) => {
      this.removeTodo(ev);
    });
  }

  resetForm() {
    this.$titleInput.val('');
    this.$descriptionInput.val('');
  }

  addTodo() {
    const todoForm = {
      title: this.$titleInput.val(),
      description: this.$descriptionInput.val(),
    };

    this.todoList.add(todoForm);
    this.generateTodoElm(todoForm);
    this.resetForm();
  }

  removeTodo(ev) {
    const todoId = parseInt($(ev.target).attr(this.selectors.taskId), 10);
    this.todoList.remove(todoId);
    $(ev.target).parent().remove();
  }
}

export default App;

$(() => {
  App.factory();
});
