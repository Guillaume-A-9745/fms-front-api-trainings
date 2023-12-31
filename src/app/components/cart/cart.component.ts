import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  listCart : {training : Training, quantity : number}[] = [];

  constructor(private cartService : CartService) {}

  ngOnInit() : void {
    this.listCart = Object.values(this.cartService.getCartItems)
  }

  removeToCart() {}
}
