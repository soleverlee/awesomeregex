import {Injectable} from '@angular/core';
import {TaskDescription} from "../models/task";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<TaskDescription[]> {
    return this.http.get<TaskDescription[]>("/api/tasks");
  }
}
