import { Component , Output , EventEmitter} from '@angular/core';
import { Todo } from 'todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title:string;
  desc:string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  onSubmit() {
    const todo = {
      sno:1,
      title:this.title,
      disc:this.desc,
      active:true
    }
    if(this.title != null && this.desc != null) {
      this.todoAdd.emit(todo)
    } else {
      alert("title or discription can't be empty")
    }
    
    // else if(this.desc != null && this.title != null) {
    //   this.todoAdd.emit(todo)
    // }
  }
}
