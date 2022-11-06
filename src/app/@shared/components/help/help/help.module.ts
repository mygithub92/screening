import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpDirective } from '../help.directive';
import { HelpComponent } from './help.component';



@NgModule({
  declarations: [HelpDirective, HelpComponent],
  imports: [
    CommonModule
  ]
})
export class HelpModule { }
