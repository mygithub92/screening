import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PipesModule } from 'app/@shared/pipes';
import * as fromAdmin from 'app/features/admin/state/reducers';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import { NgPrimeModule } from '../../app.ngprime.module';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';
import { AddEditJobComponent } from './add-edit-job/add-edit-job.component';
import { AddEditQuestionComponent } from './add-edit-question/add-edit-question.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing.module';
import { CrewComponent } from './crew/crew.component';
import { JobComponent } from './job/job.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionComponent } from './question/question.component';
import { AdminEffects } from './state/effects/admin.effect';

@NgModule({
  declarations: [
    AdminComponent,
    QuestionComponent,
    JobComponent,
    CrewComponent,
    QuestionFormComponent,
    AddEditQuestionComponent,
    AddEditFormComponent,
    AddEditJobComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    NgPrimeModule,
    PipesModule,
    StoreModule.forFeature(fromAdmin.amdinFeatureKey, fromAdmin.reducers),
    EffectsModule.forFeature([AdminEffects]),
  ],
  providers: [DynamicDialogRef, DynamicDialogConfig],
  exports: [NgPrimeModule],
})
export class AdminModule {}
