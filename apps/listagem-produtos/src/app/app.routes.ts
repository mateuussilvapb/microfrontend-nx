import { Route } from '@angular/router';
import { AppListagemProdutosComponent } from './components/listagem-produtos/listagem-produtos';

export const appRoutes: Route[] = [
  {
    path: 'cart',
    loadChildren: () => import('cart/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: AppListagemProdutosComponent,
  },
];
