import {Component, Input, OnInit} from '@angular/core';
import {TaskDescription} from "../../models/task";

@Component({
  selector: 'app-task-executor',
  templateUrl: './task-executor.component.html',
  styleUrls: ['./task-executor.component.scss']
})
export class TaskExecutorComponent implements OnInit {
  @Input() task: TaskDescription;

  constructor() { }

  ngOnInit() {
  }

}
