import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { ItemModel } from '../item/item.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  prop : String;
  cartIdea: ItemModel[] = [];

  constructor(private ideaService: ItemService) { }

  getItemsForCart(): void {
    this.cartIdea = this.ideaService.getSelectedIdea();
}
  
  ngOnInit() {
    this.ideaService.propChange.subscribe(prop => this.prop = prop);
    this.getItemsForCart();
  }

  changeProp() {
    this.ideaService.setProp("bar");
  }


}
