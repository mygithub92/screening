import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MarkAsteriskDirective } from './directive/mark-asterisk.directive';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [MarkAsteriskDirective],
  imports: [CommonModule],
  exports: [MarkAsteriskDirective],
  providers: [AuthService],
})
export class CoreModule {}
