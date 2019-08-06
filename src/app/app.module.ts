import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TaskListComponent} from './components/task-list/task-list.component';
import {TaskExecutorComponent} from './components/task-executor/task-executor.component';
import {TaskDescriptionComponent} from './components/task-description/task-description.component';
import {HttpClientModule} from "@angular/common/http";
import {TaskService} from "./services/task.service";
import {FormsModule} from "@angular/forms";
import { TaskOutputComponent } from './components/task-output/task-output.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskExecutorComponent,
    TaskDescriptionComponent,
    TaskOutputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
