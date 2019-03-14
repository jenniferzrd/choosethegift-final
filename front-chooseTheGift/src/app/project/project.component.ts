import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { ProjectModel } from './../models/project.model';
import { ProjectService } from './project.service';
import { UserModel } from '../models/user.model';
import { UserService } from '../user/user.service';

// interface Projects {
//   title: string;
//   imgProject: string;
//   desc: string;
// }

// export const PROJECTS : Projects [] = [
//   {title:'Anni Toto', imgProject: '../assets/images/random_img.jpg', desc: '' },
//   {title:'Depart Martin', imgProject: '../assets/images/random_img.jpg', desc: '' },
// ];

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService],
})

export class ProjectComponent implements OnInit {

  // projects: Projects[];

  private projects: Array<ProjectModel>;
  users: UserModel[] = [];
  total: number = 0;

  constructor(
    private projectService: ProjectService,
    private userService: UserService, 
    private router: Router) { }

  ngOnInit() {
    // this.projects = PROJECTS;
    this.loadProjects();
    this.getUsersPrice();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe(res => {
      this.projects = res;
    })
  };

  edit(project: ProjectModel) {
    sessionStorage.setItem('project', JSON.stringify(project));
    this.router.navigate(['/createproject']);
  }

  delete(project: ProjectModel) {
    this.projectService.delete(project).subscribe(data => {
      this.projects = data;
      this.loadProjects();
    })
  }

  getUsersPrice() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.users.forEach(user => {
        this.total = this.total + user.money;
      });
    });
  }

}
