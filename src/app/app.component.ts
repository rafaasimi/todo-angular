import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = 'Minhas tarefas'

  constructor() {
    this.todos.push(new Todo(1,'Simular financiamento', false));
    this.todos.push(new Todo(2,'Assinar contrato', false));
    this.todos.push(new Todo(3,'Cortar cabelo', true));
  }

}
