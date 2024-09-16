import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataAccessProductsService {
  products: any[] = [
    {
      name: 'Camiseta Básica',
      description: 'Preto',
      price: 35.0,
      image:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      link: '#',
    },
    {
      name: 'Camiseta Básica',
      description: 'Branco',
      price: 40.0,
      image:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
      link: '#',
    },
    {
      name: 'Camiseta Básica',
      description: 'Cinza',
      price: 45.56,
      image:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
      link: '#',
    },
    {
      name: 'Camiseta Básica',
      description: 'Laranja',
      price: 20,
      image:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
      link: '#',
    },
  ];

  getAllProducts$() {
    return of(this.products);
  }

  addToCart(product: any) {
    this.products.push(product);
  }
}
