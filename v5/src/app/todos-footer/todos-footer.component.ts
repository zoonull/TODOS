import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styleUrls: ['./todos-footer.component.css','../todos-container/todos-container.component.css']
})
export class TodosFooterComponent implements OnInit {
  @Input() leftC : number;
  @Input() getC : number;

  @Output() clickAll = new EventEmitter();
  @Output() removeCom = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
