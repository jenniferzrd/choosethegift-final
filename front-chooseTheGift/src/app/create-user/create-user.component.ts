import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OK } from '../models/httpstatus.model';
import { UserModel } from '../models/user.model';
import { CreateUserService } from './create-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [CreateUserService]
})
export class CreateUserComponent implements OnInit {

  private user: UserModel;
  private isValid: boolean = true;
  private message: string = "";

  constructor(private createUserService: CreateUserService, private router: Router) {
      
      if (sessionStorage.getItem("user")) {
        this.user = JSON.parse(sessionStorage.getItem("user"));
        console.log(this.user);
        sessionStorage.clear();
      } else {
        this.user = new UserModel();
        this.user.name = "";
        this.user.email = "";
        this.user.password = "";
        this.user.username = "";
        this.user.money = 0;
      }
     }

  ngOnInit() {
  }

  public saveOrUpdate(): void {
    this.isValid = this.createUserService.validate(this.user);
    if (this.isValid) {
      this.createUserService.saveOrUpdate(this.user).subscribe(res => {
        if (res.responseCode == OK) {
          this.router.navigate(['/users']);
        } else {
          this.message = res.message;
          this.isValid = false;
        }
      });
    } else {
      this.message = "Les champs * sont requis";
    }
    sessionStorage.clear();
  }

  return() {
    this.router.navigate(['/project']);
  }

}
