import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css','../todos-container/todos-container.component.css']
})
export class TodosListComponent implements OnInit {
  @Input() todos : Todo[]
  @Input() curNavList : string;

  @Output() removeTodo = new EventEmitter();
  @Output() toggleTodoCompleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
