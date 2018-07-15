import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo.interface';

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {

  transform(todos: Todo[], args?: string) {
   console.log('[FILTER TODOS]',todos);
   console.log('[FILTER TAB NAME]',args);
    if(args=='Active'){
        return todos.filter(todo => todo.completed !== true);
      }else if(args=='Completed'){
        return todos.filter(todo => todo.completed === true);
      }else if (args=='All') {
        return todos;
      }
  }
}
