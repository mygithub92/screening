import { NgModule } from '@angular/core';

import { AccountValuePipe } from './Account-value.pipe';

export const PIPES = [AccountValuePipe];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class PipesModule {}
