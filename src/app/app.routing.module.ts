import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './@core/guards/auth.guard';
import { AppMainComponent } from './app.main.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../app/features/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'main',
    component: AppMainComponent,
    children: [
      {
        path: 'product',
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            loadChildren: () => import('../app/features/product/product.module').then((m) => m.ProductModule),
          },
        ],
      },
      {
        path: 'admin',
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            loadChildren: () => import('../app/features/admin/admin.module').then((m) => m.AdminModule),
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
