import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IdeaModel } from '../models/idea.model';

@Injectable()
export class IdeasService {

  private baseUrl: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
   }

  public getIdeas(): Observable<IdeaModel[]> {
    return this.http.get<IdeaModel[]>(this.baseUrl + "getIdeas");
  }

  public delete(idea: IdeaModel): Observable<any> {
    return this.http.post(this.baseUrl + "deleteIdea", JSON.stringify(idea));
  }

}
