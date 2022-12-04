import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PipesModule } from 'app/@shared/pipes';
import { NgPrimeModule } from 'app/app.ngprime.module';

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { JobComponent } from './job/job.component';

const routes: Routes = [
  {
    path: "",
    component: JobComponent,
  },
  {
    path: "profile",
    component: EditProfileComponent,
  },
];

@NgModule({
  declarations: [EditProfileComponent, JobComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgPrimeModule,
    PipesModule,
    RouterModule.forChild(routes),
  ],
})
export class ProfileModule {}
