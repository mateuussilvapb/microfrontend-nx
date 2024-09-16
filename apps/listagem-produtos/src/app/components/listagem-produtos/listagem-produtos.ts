import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DataAccessCartService } from '@ng-mf/data-access-cart';
import { DataAccessProductsService } from '@ng-mf/data-access-products';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./listagem-produtos.html`,
  styleUrls: [`./listagem-produtos.css`],
})
export class AppListagemProdutosComponent {
  productsService = inject(DataAccessProductsService);
  cartService = inject(DataAccessCartService);

  products$ = this.productsService.getAllProducts$();

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
