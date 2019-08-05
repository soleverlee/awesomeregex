import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskDescription} from "../../models/task";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: TaskDescription[];

  @Output() taskSelected = new EventEmitter<TaskDescription>();

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  onTaskSelected(task: TaskDescription) {
    this.taskSelected.emit(task);
  }
}
