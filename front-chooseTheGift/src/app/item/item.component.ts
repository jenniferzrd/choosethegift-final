import { Component, OnInit } from '@angular/core';
import { ItemModel } from './item.model';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  storeItems: ItemModel[] = [];
  errorMessage: string;

  constructor(private ideaService: ItemService) { }


  getStoreIdea(): void {
    this.ideaService.getIdeas().subscribe(
            data => this.storeItems = data,
            error =>  this.errorMessage = <any>error);
 }

  ngOnInit() {
    this.getStoreIdea();
  }

  addIdeaInCart(id:number): void {
    this.ideaService.addIdea(id);
  }

}
