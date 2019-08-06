import {Component, Input, OnInit} from '@angular/core';
import {TaskMatchResult} from "../../models/task";

@Component({
  selector: 'app-task-output',
  templateUrl: './task-output.component.html',
  styleUrls: ['./task-output.component.scss']
})
export class TaskOutputComponent implements OnInit {

  @Input() matchResults: TaskMatchResult[];

  constructor() {
  }

  ngOnInit() {
  }

}
