import { Injectable } from '@angular/core';
import { Training } from '../model/training.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  cartItems : { [id: number]: { training: Training, quantity: number } } = {};

  constructor() { }

  addTraining(training : Training) {
    const id = training.id;
    if (this.cartItems[id]) {
      this.cartItems[id].quantity += training.quantity;
    } else {
      this.cartItems[id] = { training, quantity: training.quantity };
    }
    this.saveCart();
    console.log(this.cartItems);
  } 
  
  getCartItems(getCartItems: any): { training: Training; quantity: number; }[] {
    return Object.values(this.cartItems);
  }
  
  private saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}
