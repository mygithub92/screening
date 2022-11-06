import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgPrimeModule } from './app.ngprime.module';

@NgModule({
  imports: [],
  exports: [NgPrimeModule, FormsModule, ReactiveFormsModule],
  declarations: []
})
export class AppCommonModule {}
