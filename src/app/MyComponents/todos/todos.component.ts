import { Component } from '@angular/core';
import { Todo } from 'todos';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem:string;
  title = "todos"
  todos: Todo[]
  constructor() {
    this.localItem = (localStorage.getItem("todos") as string)
    if(this.localItem != null) {
      this.todos = JSON.parse(this.localItem)
    }
    else {
      this.todos = []   
    }
  }
  deleteTodo(todo:Todo) {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index , 1)
    localStorage.setItem("todos" , JSON.stringify(this.todos))

  }
  addTodo(todo:Todo) {
    this.todos.push(todo)
    localStorage.setItem("todos" , JSON.stringify(this.todos))
  }
}
