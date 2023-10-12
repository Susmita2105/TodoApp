import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodosComponent } from './myComponents/todos/todos.component';
import { TodoItemComponent } from './myComponents/todo-item/todo-item.component';
import { AddTodoComponent } from './myComponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// import { FontAwesomeModule } from '@fontawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot() 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
