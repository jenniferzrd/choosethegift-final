import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserModel } from './../models/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  private users: Array<UserModel>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
    })
  };

  edit(user: UserModel) {
    sessionStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/createusers']);
  }

  delete(user: UserModel) {
    this.userService.delete(user).subscribe(data => {
      this.users = data;
      this.loadUsers();
    })
  }
}
