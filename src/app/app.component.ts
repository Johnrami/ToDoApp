import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoInput: string = "";
  todos = [];
y
  createTodo() {
    let trimmedInput = this.todoInput.trim();

    if(trimmedInput !=""){
      this.todos.push({ 
        isChecked: false,
        name: this.todoInput
      });
    }

    this.todoInput = "";
  }
  
  checkOffTodo(chore) {
    chore.isChecked = (chore.isChecked) ? false:true;
  }
  
  editTodo(chore) {
    let index = this.todos.indexOf(chore);
    
    let OGText = this.todos[index].name;

    this.todos[index].name = prompt('please write new todo', this.todos[index].name);

    if (this.todos[index].name == null) {
      this.todos[index].name = OGText;
    }
  }

  deleteTodo(chore) {
    let index = this.todos.indexOf(chore);

    this.todos.splice(index, 1);
  }
  
  deleteAll() {
    this.todos = [];
  }

}


