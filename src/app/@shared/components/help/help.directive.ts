import { ComponentFactoryResolver, Directive, Input, ViewContainerRef } from '@angular/core';

import { HelpService } from './help.service';
import { HelpComponent } from './help/help.component';

@Directive({
  selector: '[ttHelp]'
})
export class HelpDirective {
  @Input('ttHelp') set ttHelp(key: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(HelpComponent);
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    (<HelpComponent>componentRef.instance).helpText = this.service.getContents(key ? key : this.getHtmlFor());
  }
  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private service: HelpService
  ) {}

  private getHtmlFor() {
    let helpKey = 'no_help';
    try {
      const htmlFor = this.viewContainerRef['_data'].template('_def').parent.element.attrs.find(ele => ele.includes('for'));
      if (htmlFor) {
        helpKey = htmlFor[2];
      }
    } catch {
      return helpKey;
    }
    return helpKey;
  }
}
