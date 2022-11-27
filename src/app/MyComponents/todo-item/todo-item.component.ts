import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'todos';
import {Input} from '@angular/core'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() toDoDelete:EventEmitter<Todo> = new EventEmitter();
  constructor() {

  }

   onClick(todo:Todo) {
    this.toDoDelete.emit(todo)
   }
}
