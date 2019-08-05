import {Component, OnInit} from '@angular/core';
import {TaskDescription} from "../../models/task";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: TaskDescription[];

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    console.log(this.taskService);
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }
}
