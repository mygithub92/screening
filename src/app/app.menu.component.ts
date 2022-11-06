import { Component, Input, OnInit } from '@angular/core';

import { AppMainComponent } from './app.main.component';

@Component({
  selector: 'tt-menu',
  template: `
    <ul class="layout-menu layout-main-menu clearfix">
      <li tt-menuitem *ngFor="let item of menuModel; let i = index" [item]="item" [index]="i" [root]="true"></li>
    </ul>
  `,
})
export class AppMenuComponent implements OnInit {
  @Input()
  menuModel: any[];

  constructor(public app: AppMainComponent) {}

  ngOnInit() {}
}
