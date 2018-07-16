import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  todos: Todo[];
  content = '';
  navList = ['All','Active','Completed'];
  curNavList = 'All';

  ngOnInit() {
    this.todos = [
      {id: 1, content: 'HTML', completed: true},
      {id: 2, content: 'CSS', completed: true},
      {id: 3, content: 'JS', completed: false}
    ];
  }

  getTodoId(){
    return this.todos.length ? Math.max.apply(null, this.todos.map( todo => todo.id)) + 1 : 1;
  };

  addTodo() {
    console.log('[ADD TODO 내용]', this.content);
    const newTodo: Todo = { id: this.getTodoId(), content: this.content, completed: false};
    this.todos = [newTodo, ...this.todos];
    this.content = '';
  }

  toggleTodoCompleted(id: number) {
    console.log('[CLICKED TODO ID]',id);
    this.todos = this.todos.map(todo => todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo)
  }

  removeTodo(id: number) {
    console.log('[DELETED TODO ID]',id);
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  removeComTodo() {
    console.log('[Completed todo delete]');
    this.todos = this.todos.filter(todo => todo.completed !== true);
  }

  toggleAllCompleted(v: boolean) {
    console.log('[All toggle clicked]');
    console.log('[All toggle Status]', v);
    if(v == true){
      this.todos = this.todos.map(todo => Object.assign({}, todo, { completed : true ? true : !todo.completed }));
    }else if(v == false){
      this.todos = this.todos.map(todo => Object.assign({}, todo, { completed : true ? false : !todo.completed }));
    }
  }

  getCount(){
    return this.todos.filter(todo => todo.completed === true).length;
  }
  leftCount(){
    return this.todos.filter(todo => todo.completed === false).length;
  }

}
