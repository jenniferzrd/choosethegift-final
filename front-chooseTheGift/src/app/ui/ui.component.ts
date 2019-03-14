import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { UserService } from '../user/user.service';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css'],
  providers:[UserService]
})
export class UiComponent implements OnInit {

  users: UserModel[] = [];
  total: number = 0;
  hideElement = false;
  
  constructor(private userService: UserService, private router: Router) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login' || event.url === '/register') {
          this.hideElement = true;
        }  else {
          this.hideElement = false;
        }
      }
    });
  }

  ngOnInit() {

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.users.forEach(user => {
        this.total = this.total + user.money;
      });
    });
  }
}
