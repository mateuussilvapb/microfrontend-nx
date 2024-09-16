import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataAccessCartComponent {
  cart: any[] = [];

  addToCart(product: any) {
    this.cart.push(product);
    console.log('Cart:', this.cart);
  }

  getCart() {
    return this.cart;
  }

  removeProduct(product: any) {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }
}
