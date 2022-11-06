import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ttButtonCtrl]'
})
export class ButtonCtrlDirective implements OnInit {
  currentUser: any;
  private _type: number;
  private _groupId: number;

  @Input() set ttButtonCtrl(type: number) {
    this._type = type;
  }

  @Input() set ttButtonCtrlGroupId(groupId: number) {
    this._groupId = groupId;
  }
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    this.currentUser = { id: 1 };
  }

  ngOnInit(): void {
    if (this.checkRole(this._type) && this.checkGroup()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  private checkRole(type: number): boolean {
    return true;
  }

  private checkGroup(): boolean {
    return true;
  }
}

// How to use:
// <button *ttButtonCtrl="userTypes.User; groupId: exchange.userGroup?.id"
