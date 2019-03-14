import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";
import { ProjectModel } from '../models/project.model';
import { RestResponse } from '../models/restResponse.model';

@Injectable()
export class CreateProjectService {

  money: ProjectModel[];

  constructor(private http: HttpClient) { }

  public validate(project: ProjectModel): boolean {
    let isValid = true;

    if (!project.title) {
      isValid = false;
    }
    if (isNaN(project.totalmoney)) {
      isValid = false;
    }

    return isValid;
  }
  public saveOrUpdateProject(project: ProjectModel): Observable<RestResponse> {
    return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdateProject", JSON.stringify(project));
}

}
