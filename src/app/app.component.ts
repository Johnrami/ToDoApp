import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoInput = '';
  todos = [];

  createTodo() {
    this.todos.push(this.todoInput);
    this.todoInput = "";
  }

  editTodo(chore) {
    console.log(chore);
    let index = this.todos.indexOf(chore);
    console.log(index);

    this.todos[index] = prompt('please write new todo');
  }

  deleteTodo(chore) {
    let index = this.todos.indexOf(chore);
    this.todos.splice(index, 1);
  }
  

}


