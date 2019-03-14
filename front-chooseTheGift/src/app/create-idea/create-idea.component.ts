import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OK } from '../models/httpstatus.model';
import { IdeaModel } from '../models/idea.model';
import { CreateIdeaService } from './create-idea.service';

@Component({
  selector: 'app-create-idea',
  templateUrl: './create-idea.component.html',
  styleUrls: ['./create-idea.component.css'],
  providers: [CreateIdeaService]
})
export class CreateIdeaComponent implements OnInit {

  private idea: IdeaModel;
  private isValid: boolean = true;
  private message: string = "";

  constructor(private createIdeaService: CreateIdeaService, private router: Router) {

    if (sessionStorage.getItem("idea")) {
      this.idea = JSON.parse(sessionStorage.getItem("idea"));
      sessionStorage.clear();
    } else {
      this.idea = new IdeaModel();
      this.idea.title = "";
      this.idea.comment = "";
      this.idea.jaime = false;
      this.idea.quantity = 0;
    }
  }

  ngOnInit() { }

  public saveOrUpdateIdea(): void {
      this.isValid = this.createIdeaService.validate(this.idea);
      if (this.isValid) {
        this.createIdeaService.saveOrUpdateIdea(this.idea).subscribe(res => {
          if (res.responseCode == OK) {
            this.router.navigate(['/home']);

          } else {
            this.message = res.message;
            this.isValid = false;
          }
        });
      } else {
        if (!this.idea.title) {
          this.message = "Les champs * sont requis";
          document.getElementById("title").style.borderColor = 'red';
        }
        else if (isNaN(this.idea.price) || !this.idea.price) {
          this.message = "Oups ! Il y a une erreur dans l'indication du prix";
          document.getElementById("price").style.borderColor = 'red';
        }
        else {
          this.message = "Les champs * sont requis";
        }
      }
      sessionStorage.clear();
  }

  return() {
    this.router.navigate(['/ideas']);
  }

  // saveOrUpdateIdea() {
  //   this.isValid = this.createIdeaService.validate(this.idea);
  //   if (this.isValid) {
  //     this.createIdeaService.saveOrUpdateIdea(this.idea).subscribe(res => {
  //       if (res.responseCode == OK) {
  //         res = this.idea;
  //         console.log("return sur home")
  //       } else {
  //         this.message = res.message;
  //         this.isValid = false;
  //       }
  //     });
  //   } else {
  //     this.message = "Les champs * sont requis";
  //   }
  //   sessionStorage.clear();
  // }
}
