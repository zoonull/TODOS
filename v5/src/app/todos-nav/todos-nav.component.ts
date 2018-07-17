import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todos-nav',
  templateUrl: './todos-nav.component.html',
  styleUrls: ['./todos-nav.component.css','../todos-container/todos-container.component.css']
})
export class TodosNavComponent implements OnInit {
  @Input() navList ;
  @Input() curNavList : string;
  @Output() curNavListPush = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
