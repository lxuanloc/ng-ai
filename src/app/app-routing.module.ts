import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WarehouseComponent} from "./features/warehouse/warehouse.component";
import {ProductComponent} from "./features/product/product.component";
const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart.component').then(m => m.CartComponent),
  },
  {
    path: 'order',
    loadComponent: () => import('./features/order/order.component').then(m => m.OrderComponent),
  },
  {
    path: 'product',
    loadComponent: () => import('./features/product/product.component').then(m => m.ProductComponent),
  },
  {
    path: 'product/:id',
    loadComponent: () => import('./features/product/create-edit-product/create-edit-product.component').then(m => m.CreateEditProductComponent),
  },
  {
    path: 'warehouse',
    loadComponent: () => import('./features/warehouse/warehouse.component').then(m => m.WarehouseComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
