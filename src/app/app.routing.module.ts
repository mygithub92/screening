import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppMainComponent } from './app.main.component';

const routes: Routes = [
  {
    path: "main",
    component: AppMainComponent,
    children: [
      {
        path: "product",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../app/features/product/product.module").then(
                (m) => m.ProductModule
              ),
          },
        ],
      },
      {
        path: "admin",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../app/features/admin/admin.module").then(
                (m) => m.AdminModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
