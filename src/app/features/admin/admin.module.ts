import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PipesModule } from 'app/@shared/pipes';
import * as fromAdmin from 'app/features/admin/state/reducers';

import { NgPrimeModule } from '../../app.ngprime.module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing.module';
import { AccountsLoadedGuard } from './guards/accounts-loaded.guard';
import { AdminEffects } from './state/effects/admin.effect';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    NgPrimeModule,
    PipesModule,
    StoreModule.forFeature(fromAdmin.amdinFeatureKey, fromAdmin.reducers),
    EffectsModule.forFeature([AdminEffects])
  ],
  providers: [AccountsLoadedGuard],
  exports: [NgPrimeModule]
})
export class AdminModule {}
