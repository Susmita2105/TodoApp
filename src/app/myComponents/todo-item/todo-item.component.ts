import { Component, Input, Output, EventEmitter} from '@angular/core';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
     @Input() x!: todo;
     @Input() i!: number;
     @Output() todoDeleteX: EventEmitter<todo> = new EventEmitter;
     @Output() todoCheckbox: EventEmitter<todo> = new EventEmitter;

     onClick(todoToBeDeleted: todo){
      this.todoDeleteX.emit(todoToBeDeleted)
      console.log("delete button has been clicked")
     }

     onCheckBoxClick(doneTodo: todo | undefined){
      console.log(doneTodo)
      this.todoCheckbox.emit(doneTodo);
      console.log(doneTodo)
     }
}
