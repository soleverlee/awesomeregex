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
  _task: TaskDescription;
  _mode: number;

  source: string = "";
  regex: string = "";
  replaceTo: string = "";
  matchResults: TaskMatchResult[] = null;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
  }

  @Input()
  set task(task: TaskDescription) {
    this._task = task;
    this.matchResults = null;
  }

  @Input()
  set mode(mode: number) {
    this._mode = mode;
    this.matchResults = null;
  }

  get task() {
    return this._task;
  }

  get mode() {
    return this._mode;
  }

  get modes() {
    return MODE_IDS;
  }

  onExecute() {
    var sources = this.task ? this.task.sources : [this.source];
    if (this.mode === MODE_IDS.MATCH)
      this._onMatch(sources);
    else if (this.mode === MODE_IDS.FIND)
      this._onFind(sources);
  }

  _onMatch(sources: string[]) {
    this.taskService.match(sources, this.regex)
    .subscribe(results => {
      console.log(results);
      this.matchResults = results;
    })
  }

  _onFind(sources: string[]) {
    this.taskService.find(sources, this.regex)
    .subscribe(results => {
      console.log(results);
      this.matchResults = results;
    })
  }

  get passed() {
    return this.matchResults && !this.matchResults.find(result => !result.matched);
  }

  get failed() {
    return this.matchResults && this.matchResults.find(result => !result.matched);
  }
}
