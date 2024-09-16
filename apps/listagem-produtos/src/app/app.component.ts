import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './components/header/header.component';
import { DataAccessProductsService } from '@ng-mf/data-access-products';
import { DataAccessCartService } from '@ng-mf/data-access-cart';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, AppHeaderComponent],
  selector: 'ng-mf-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  productsService = inject(DataAccessProductsService);
  cartService = inject(DataAccessCartService);

  products$ = this.productsService.getAllProducts$();

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
