import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DataAccessCartComponent } from '@ng-mf/data-access-cart';
import { DataAccessProductsComponent } from '@ng-mf/data-access-products';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./listagem-produtos.html`,
  styleUrls: [`./listagem-produtos.css`],
})
export class AppListagemProdutosComponent {
  productsService = inject(DataAccessProductsComponent);
  cartService = inject(DataAccessCartComponent);

  products$ = this.productsService.getAllProducts$();

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
