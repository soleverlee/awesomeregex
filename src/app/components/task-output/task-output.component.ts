import {Component, Input, OnInit} from '@angular/core';
import {TaskMatchResult} from "../../models/task";
import {MODE_IDS} from "../../constants/modes";

@Component({
  selector: 'app-task-output',
  templateUrl: './task-output.component.html',
  styleUrls: ['./task-output.component.scss']
})
export class TaskOutputComponent implements OnInit {

  @Input() matchResults: TaskMatchResult[];

  @Input() mode: number;

  constructor() {
  }

  ngOnInit() {
  }

  matchSuccess(result: TaskMatchResult): boolean {
    console.log(this.mode == MODE_IDS.MATCH && result.matched);
    return this.mode == MODE_IDS.MATCH && result.matched;
  }

  matchFailed(result: TaskMatchResult): boolean {
    console.log(this.mode == MODE_IDS.MATCH && result.matched);
    return this.mode == MODE_IDS.MATCH && !result.matched;
  }

}
