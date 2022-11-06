import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountListComponent } from './account-list/account-list.component';
import { AddEditAccountComponent } from './add-edit-account.component';
import { CompanyComponent } from './company/company.component';
import { PartnerComponent } from './partner/partner.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  { path: '', redirectTo: 'account-list', pathMatch: 'full' },
  { path: 'account-list', component: AccountListComponent },
  {
    path: 'add-edit/:id',
    component: AddEditAccountComponent,
    children: [
      { path: '', redirectTo: 'company', pathMatch: 'full' },
      {
        path: 'company',
        component: CompanyComponent
      },
      {
        path: 'role',
        component: RoleComponent
      },
      {
        path: 'partner',
        component: PartnerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEditAccountRoutingModule {}
