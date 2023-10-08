import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
    title: string="";
    desc: string="";

    @Output() todoAddX: EventEmitter<todo> = new EventEmitter;
    
    onSubmit(){
      const todoF ={
        sno:0,
        title: this.title,
        desc: this.desc,
        active: true
      }

      this.todoAddX.emit(todoF);

      this.title="";
      this.desc="";
    }


}
