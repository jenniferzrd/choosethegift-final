import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";
import { RestResponse } from '../models/restResponse.model';
import { IdeaModel } from '../models/idea.model';

@Injectable()
export class CreateIdeaService {

  constructor(private http: HttpClient) { }

  public validate(idea: IdeaModel): boolean {
    let isValid = true;

    if (isNaN(idea.price)) {
      isValid = false;
    }

    if(!idea.title) {
      isValid = false;
    }

    return isValid;
  }
  
  public saveOrUpdateIdea(idea: IdeaModel): Observable<any> {
    return this.http.post("http://localhost:8080/saveOrUpdateIdea", JSON.stringify(idea));
  }
}
