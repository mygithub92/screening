import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AccountsLoadedGuard } from './guards/accounts-loaded.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'manage',
    loadChildren: () => import('./add-edit-account/add-edit-account.module').then(m => m.AddEditAccountModule),
    canActivate: [AccountsLoadedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
