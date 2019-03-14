import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdeaModel } from '../models/idea.model';
import { UserModel } from '../models/user.model';
import { UserService } from '../user/user.service';
import { IdeasService } from '../ideas/ideas.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [UserService, IdeasService]
})
export class CartComponent implements OnInit {

  // TUTOS
  // cartItems: IdeaModel[] = [];
  // FIN TUTOS

  // public carts = [];

  private idea: IdeaModel;

  message: String = "";

  users: UserModel[] = [];
  itemCart: IdeaModel[] = [];
  resultSubUserMoneyIdeaPrice;

  total: number = 0;

  constructor(
    private userService: UserService,
    private ideasService: IdeasService
    // private cartService: CartServiceService
  ) {

    this.itemCart = [];

    if (sessionStorage.getItem("idea")) {
      this.idea = JSON.parse(sessionStorage.getItem("idea"));
      console.log(this.idea);
    }

    // ESSAI LOCALSTORAGE

    // let a = [1, 2, 3];
    // let array = [];
    // localStorage.setItem("a", JSON.stringify(a));
    // a = JSON.parse(localStorage.getItem("a"));
    // console.log(a);
    // array = JSON.parse(sessionStorage.getItem("idea"));
    // array.push(this.idea);
    // console.log(array);
    // Re-serialize the array back into a string and store it in localStorage
    // sessionStorage.setItem('idea', JSON.stringify(array));
    // }

    // FIN ESSAI LOCALSTORAGE

  }


  ngOnInit(): void {

    this.getResultCart();

    // TUTOS
    // this.getItemsForCart();

    // this.getCartService();
    // this.cartService.itemCart.subscribe((c: IdeaModel[]) => {
    //   this.itemCart = c;
    //   console.log(c);
    // })

    // FIN TUTOS
  }

  // TUTOS

  // getItemsForCart(): void {
  //   this.cartItems = this.cartService.getSelectedItems();
  //   console.log("this.cartItems");
  //   console.log(this.cartItems);
  // }

  // getCartService (): void {
  //   this.carts = this.cartService.getCart();
  //   console.log(this.carts)
  // }

  // FIN TUTOS

  removeCartIdea() {
    sessionStorage.removeItem("idea");
    sessionStorage.clear();
    // this.router.navigate(['/ideas']);
  }

  getResultCart() {

    if(this.idea == undefined) {
      this.idea = new IdeaModel;
      this.idea.price = null;
    } 

    else {
      let selectedIdeaPrice = this.idea.price;

      this.userService.getUsers().subscribe(users => {
        this.users = users;
        this.users.forEach(user => {
          this.total = this.total + user.money;
        });

        let totalUserMoney = this.total;
        this.resultSubUserMoneyIdeaPrice = totalUserMoney - selectedIdeaPrice;

        if(this.resultSubUserMoneyIdeaPrice <= 0 ) {
          this.message = "Attention, vous avez dépassé le budget";
          document.getElementById("mess").style.color = '#ffa801';
          
        } else {
          this.message = "Vous avez encore du budget"
          document.getElementById("mess").style.color = '#ffa801';
        }

      });
    }
  }

  validation() {
    // let result = this.resultSubUserMoneyIdeaPrice;
    // if(result >= 0) {
    //   this.message = "Il vous reste " + result + " euros sur votre cagnotte";
    // } else {
    this.message = "Très bon choix ! C'est Validé !";
    sessionStorage.clear();
    // }
  }


}
