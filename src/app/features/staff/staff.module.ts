import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PipesModule } from 'app/@shared/pipes';
import { NgPrimeModule } from 'app/app.ngprime.module';

import { CrewComponent } from './crew/crew.component';
import { ScreeningReportComponent } from './screening-report/screening-report.component';
import { SubmittedScreeningComponent } from './submitted-screening/submitted-screening.component';

const routes: Routes = [
  {
    path: "",
    component: SubmittedScreeningComponent,
  },
  {
    path: "report",
    component: ScreeningReportComponent,
  },
  {
    path: "crew",
    component: CrewComponent,
  },
];

@NgModule({
  declarations: [
    SubmittedScreeningComponent,
    CrewComponent,
    ScreeningReportComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgPrimeModule,
    PipesModule,
    RouterModule.forChild(routes),
  ],
})
export class StaffModule {}
