import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskDescription} from "../../models/task";
import {TaskService} from "../../services/task.service";
import {MODE_IDS, REGEX_MODES} from "../../constants/modes";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: TaskDescription[];
  selectedMode: number = 1;

  @Output() taskSelected = new EventEmitter<TaskDescription>();

  @Output() modeChanged = new EventEmitter<number>();

  constructor(private taskService: TaskService) {
  }

  get modes() {
    return REGEX_MODES;
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  onTaskSelected(task: TaskDescription) {
    this.taskSelected.emit(task);
  }

  onSwitchMode(mode: number) {
    this.selectedMode = mode;
    this.modeChanged.emit(mode);
  }
}
