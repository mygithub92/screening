import { NgModule } from '@angular/core';

import { HelpDirective } from './help.directive';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [HelpComponent, HelpDirective],
  exports: [HelpComponent, HelpDirective],
  entryComponents: [HelpComponent]
})
export class HelpModule {}
