import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../models/user.model';


@Injectable()
export class UserService {

  private baseUrl: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.baseUrl + "getUsers");
  }

  public delete(user: UserModel): Observable<any> {
    return this.http.post(this.baseUrl + "deleteUser", JSON.stringify(user));
  }

}
