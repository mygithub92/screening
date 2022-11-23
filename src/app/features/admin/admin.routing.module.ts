import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';
import { AddEditJobComponent } from './add-edit-job/add-edit-job.component';
import { AdminComponent } from './admin.component';
import { CrewComponent } from './crew/crew.component';
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
    path: "crew",
    component: CrewComponent,
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
