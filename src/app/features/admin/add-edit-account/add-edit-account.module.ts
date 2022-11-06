import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxErrorsModule } from '@hackages/ngxerrors';
import { PipesModule } from 'app/@shared/pipes';
import { NgPrimeModule } from 'app/app.ngprime.module';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

import { AccountListComponent } from './account-list/account-list.component';
import { AddEditAccountComponent } from './add-edit-account.component';
import { AddEditAccountRoutingModule } from './add-edit-account.routing.module';
import { CompanyComponent } from './company/company.component';
import { FooterComponent } from './footer/footer.component';
import { PartnerDialogComponent } from './partner/partner-dialog/partner-dialog.component';
import { PartnerComponent } from './partner/partner.component';
import { RoleDialogComponent } from './role/role-dialog/role-dialog.component';
import { RoleComponent } from './role/role.component';

@NgModule({
  declarations: [
    CompanyComponent,
    RoleComponent,
    PartnerComponent,
    AddEditAccountComponent,
    RoleDialogComponent,
    AccountListComponent,
    PartnerDialogComponent,
    FooterComponent
  ],
  imports: [CommonModule, AddEditAccountRoutingModule, NgPrimeModule, ReactiveFormsModule, NgxErrorsModule, PipesModule],
  providers: [DialogService, ConfirmationService],
  entryComponents: [RoleDialogComponent, PartnerDialogComponent]
})
export class AddEditAccountModule {}
