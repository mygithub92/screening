import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEditProductComponent } from './add-edit/add-edit-product/add-edit-product.component';

const routes: Routes = [
  { path: "", redirectTo: "add-edit", pathMatch: "full" },

  {
    path: "add-edit",
    component: AddEditProductComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductRoutingModule {}
