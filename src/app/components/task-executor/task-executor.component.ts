import {Component, Input, OnInit} from '@angular/core';
import {TaskDescription} from "../../models/task";
import {Mode} from "../../models/mode";
import {MODE_IDS, REGEX_MODES} from "../../constants/modes";

@Component({
  selector: 'app-task-executor',
  templateUrl: './task-executor.component.html',
  styleUrls: ['./task-executor.component.scss']
})
export class TaskExecutorComponent implements OnInit {
  @Input() task: TaskDescription;
  @Input() mode: Mode;

  constructor() {
  }

  ngOnInit() {
  }

  get modes() {
    return MODE_IDS;
  }
}
