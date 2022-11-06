import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEditProductComponent } from './add-edit/add-edit-product/add-edit-product.component';
import { ProductsLoadedGuard } from './guards/products-loaded.guard';
import { HistoryListComponent } from './history-list/history-list.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'product-list', pathMatch: 'full' },
  {
    path: 'product-list',
    component: ProductListComponent,
    canActivate: [ProductsLoadedGuard]
  },
  {
    path: 'history-list',
    component: HistoryListComponent
  },
  {
    path: 'add-edit',
    component: AddEditProductComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ProductRoutingModule {}
