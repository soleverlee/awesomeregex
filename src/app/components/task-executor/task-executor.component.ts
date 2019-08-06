import {Component, Input, OnInit} from '@angular/core';
import {TaskDescription, TaskMatchResult} from "../../models/task";
import {Mode} from "../../models/mode";
import {MODE_IDS, REGEX_MODES} from "../../constants/modes";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task-executor',
  templateUrl: './task-executor.component.html',
  styleUrls: ['./task-executor.component.scss']
})
export class TaskExecutorComponent implements OnInit {
  @Input() task: TaskDescription;
  @Input() mode: Mode;

  source: string = "";
  regex: string = "";
  replaceTo: string = "";
  matchResults: TaskMatchResult[] = null;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
  }

  get modes() {
    return MODE_IDS;
  }

  onExecute() {
    var sources = this.task ? this.task.sources : [this.source];
    this.taskService.match(sources, this.regex)
    .subscribe(results => {
      console.log(results);
      this.matchResults = results;
    })
  }
}
