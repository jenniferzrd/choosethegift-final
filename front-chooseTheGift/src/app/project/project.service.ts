import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ProjectModel } from '../models/project.model';

@Injectable()
export class ProjectService {

  private baseUrl: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public getProjects(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(this.baseUrl + "getProjects");
  }

  public delete(project: ProjectModel): Observable<any> {
    return this.http.post(this.baseUrl + "deleteProject", JSON.stringify(project));
  }

}