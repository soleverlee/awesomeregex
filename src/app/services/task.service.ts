import {Injectable} from '@angular/core';
import {TaskDescription, TaskMatchResult} from "../models/task";
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

  match(sources: string[], regex: string): Observable<TaskMatchResult[]> {
    return this.http.post<TaskMatchResult[]>("/api/match", {sources, regex});
  }

  find(sources: string[], regex: string): Observable<TaskMatchResult[]> {
    return this.http.post<TaskMatchResult[]>("/api/find", {sources, regex});
  }
}
