import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { ButtonCtrlDirective } from './directives/button-ctrl.directive';

@NgModule({
  declarations: [MultiSelectComponent, ButtonCtrlDirective],
  imports: [CommonModule]
})
export class SharedModule {}
