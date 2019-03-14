import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OK, BAD_VALUE } from '../models/httpstatus.model';
import { ProjectModel } from '../models/project.model';
import { CreateProjectService } from './create-project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  providers: [CreateProjectService]
})
export class CreateProjectComponent implements OnInit {

  private project: ProjectModel;
  private isValid: boolean = true;
  private message: string = "";

  constructor(
    private createProjectService: CreateProjectService,
    private router: Router) {

    if (sessionStorage.getItem("project")) {
      this.project = JSON.parse(sessionStorage.getItem("project"));
    } else {
      this.project = new ProjectModel();
    }
  }

  ngOnInit() {
  }

  public saveOrUpdateProject(): void {
    this.isValid = this.createProjectService.validate(this.project);
    if (this.isValid) {
      this.createProjectService.saveOrUpdateProject(this.project).subscribe(res => {
        if (res.responseCode == OK) {
          this.router.navigate(['/project']);
        } else {
          this.message = res.message;
          this.isValid = false;
        }
      });
    }

    else {
      if (!this.project.title) {
        this.message = "Les champs * sont requis";
        document.getElementById("title").style.borderColor = 'red';
      }
      else if (isNaN(this.project.totalmoney) || !this.project.totalmoney) {
        this.message = "Oups ! Il y a une erreur dans l'indication du prix";
        document.getElementById("totalmoney").style.borderColor = 'red';
      }
      else {
        this.message = "Les champs * sont requis";
      }
    }
    sessionStorage.clear();
  }

  return() {
    this.router.navigate(['/project']);
  }

}
