import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PipesModule } from 'app/@shared/pipes';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import { NgPrimeModule } from '../../app.ngprime.module';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';
import { AddEditJobComponent } from './add-edit-job/add-edit-job.component';
import { AddEditQuestionComponent } from './add-edit-question/add-edit-question.component';
import { AdminComponent } from './admin.component';
import { JobComponent } from './job/job.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
  },
  {
    path: "jobs",
    component: JobComponent,
  },
  {
    path: "forms",
    component: QuestionFormComponent,
  },
  {
    path: "questions",
    component: QuestionComponent,
  },
  {
    path: "add-edit-form/:id",
    component: AddEditFormComponent,
  },
  {
    path: "add-edit-job/:id",
    component: AddEditJobComponent,
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    QuestionComponent,
    JobComponent,
    QuestionFormComponent,
    AddEditQuestionComponent,
    AddEditFormComponent,
    AddEditJobComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgPrimeModule,
    PipesModule,
    RouterModule.forChild(routes),
  ],
  providers: [DynamicDialogRef, DynamicDialogConfig],
  exports: [NgPrimeModule],
})
export class AdminModule {}
