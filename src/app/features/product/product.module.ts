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
import { GrowerComponent } from './add-edit/grower/grower.component';
import { WineryComponent } from './add-edit/winery/winery.component';
import { HistoryListComponent } from './history-list/history-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductEffects, ProductHistoryEffects } from './state/effects';
import { TransferDialogComponent } from './transfer-dialog/transfer-dialog.component';

@NgModule({
  declarations: [
    ProductListComponent,
    HistoryListComponent,
    AddEditProductComponent,
    GrowerComponent,
    TransferDialogComponent,
    WineryComponent,
  ],
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
  entryComponents: [GrowerComponent, WineryComponent, TransferDialogComponent],
})
export class ProductModule {}
