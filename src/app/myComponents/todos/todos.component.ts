import { Component } from '@angular/core';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
     todos: todo[]= [];
     localItem: string|null;

     constructor(){
        this.localItem = localStorage.getItem("todos");

        if(this.localItem == null){
          this.todos = []
        }
        else{
          this.todos = JSON.parse(this.localItem);
        }

     }

     deleteTodo(t:todo){
        console.log(t);
        const index = this.todos.indexOf(t);
        this.todos.splice(index,1);
        localStorage.setItem("todos", JSON.stringify(this.todos));
     }
     addTodo(t:todo){
      console.log(t);
      this.todos.push(t);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
    toggleTodo(t:todo){
      console.log(t);
      const index = this.todos.indexOf(t);
      this.todos[index].active = !this.todos[index].active;
      localStorage.setItem("todos", JSON.stringify(this.todos));
   }

}
