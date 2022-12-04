import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PipesModule } from 'app/@shared/pipes';
import { NgPrimeModule } from 'app/app.ngprime.module';

import { ScreeningFormComponent } from './screening-form/screening-form.component';
import { ScreeningResultComponent } from './screening-result/screening-result.component';

const routes: Routes = [
  {
    path: "",
    component: ScreeningFormComponent,
  },
  {
    path: "result",
    component: ScreeningResultComponent,
  },
];

@NgModule({
  declarations: [ScreeningFormComponent, ScreeningResultComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgPrimeModule,
    PipesModule,
    RouterModule.forChild(routes),
  ],
})
export class ScreeningModule {}
