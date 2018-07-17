import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css','../todos-container/todos-container.component.css']
})
export class TodosFormComponent implements OnInit {
  @Output() addTodo = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
