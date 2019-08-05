import {Component, Input, OnInit} from '@angular/core';
import {TaskDescription} from "../../models/task";

@Component({
  selector: 'app-task-description',
  templateUrl: './task-description.component.html',
  styleUrls: ['./task-description.component.scss']
})
export class TaskDescriptionComponent implements OnInit {
  @Input() task: TaskDescription;

  constructor() {
  }

  ngOnInit() {
  }

}
