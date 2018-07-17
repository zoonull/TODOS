import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosFilterPipe } from './pipes/todos-filter.pipe';
import { TodosContainerComponent } from './todos-container/todos-container.component';
import { TodosFormComponent } from './todos-form/todos-form.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosFooterComponent } from './todos-footer/todos-footer.component';
import { TodosNavComponent } from './todos-nav/todos-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosFilterPipe,
    TodosContainerComponent,
    TodosFormComponent,
    TodosListComponent,
    TodosFooterComponent,
    TodosNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
