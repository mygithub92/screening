import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxErrorsModule } from '@hackages/ngxerrors';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from 'app/features/product/state/reducers';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

import { NgPrimeModule } from '../../app.ngprime.module';
import { AddEditProductComponent } from './add-edit/add-edit-product/add-edit-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductEffects, ProductHistoryEffects } from './state/effects';
import { TransferDialogComponent } from './transfer-dialog/transfer-dialog.component';

@NgModule({
  declarations: [AddEditProductComponent, TransferDialogComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    StoreModule.forFeature(fromProduct.productFeatureKey, fromProduct.reducers),
    EffectsModule.forFeature([ProductEffects, ProductHistoryEffects]),
    NgPrimeModule,
    ReactiveFormsModule,
    NgxErrorsModule,
  ],
  providers: [DialogService, ConfirmationService],
  exports: [NgPrimeModule, NgxErrorsModule],
  entryComponents: [TransferDialogComponent],
})
export class ProductModule {}
