import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAccessCartComponent } from '@ng-mf/data-access-cart';

@Component({
  selector: 'ng-mf-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nx-welcome.component.html',
  styleUrls: ['./nx-welcome.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  cartService = inject(DataAccessCartComponent);

  getTotal() {
    return this.cartService
      .getCart()
      .reduce((acc, product) => acc + product.price, 0);
  }

  removeFromCart(product: any) {
    this.cartService.removeProduct(product);
  }
}
