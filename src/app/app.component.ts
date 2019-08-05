import { Component } from '@angular/core';
import {TaskDescription} from "./models/task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedTask: TaskDescription;

  onTaskSelected(task: TaskDescription) {
    this.selectedTask = task;
  }
}
