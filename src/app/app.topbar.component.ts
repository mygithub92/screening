import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { RoleType } from 'app/@shared/api-interfaces';
import { UserActions } from 'app/@state/actions';
import * as fromUser from 'app/@state/reducers';
import { ConfirmationService } from 'primeng/api';

import { AppMainComponent } from './app.main.component';

@Component({
  selector: 'tt-topbar',
  template: `
    <p-confirmDialog header="Confirmation" icon="pi pi-exclamation-triangle"></p-confirmDialog>
    <div class="topbar clearfix">
      <div class="topbar-left">
        <a routerLink="/">
          <img src="assets/layout/images/logo.png" class="topbar-logo" routerLink="/" />
        </a>
      </div>

      <div class="topbar-right">
        <a
          id="menu-button"
          *ngIf="showMenuButton"
          href="#"
          (click)="app.onMenuButtonClick($event)"
          [ngClass]="{ 'menu-button-rotate': app.rotateMenuButton }"
        >
          <i class="fa fa-angle-left"></i>
        </a>

        <a id="topbar-menu-button" href="#" (click)="app.onTopbarMenuButtonClick($event)">
          <i class="fa fa-bars"></i>
        </a>

        <ul class="topbar-items fadeInDown" [ngClass]="{ 'topbar-items-visible': app.topbarMenuActive }">
          <li #profile class="profile-item" [ngClass]="{ 'active-top-menu': app.activeTopbarItem === profile }">
            <a href="#" (click)="app.onTopbarItemClick($event, profile)">
              <img class="profile-image" src="assets/layout/images/avatar.png" />
              <span class="topbar-item-name">Isabel Lopez</span>
              <span class="topbar-item-role">Marketing</span>
            </a>

            <ul class="layout-menu fadeInDown">
              <li role="menuitem">
                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                  <i class="fa fa-fw fa-user"></i>
                  <span>Profile</span>
                </a>
              </li>
              <li role="menuitem">
                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                  <i class="fa fa-fw fa-user-secret"></i>
                  <span>Privacy</span>
                </a>
              </li>
              <li role="menuitem">
                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                  <i class="fa fa-fw fa-cog"></i>
                  <span>Settings</span>
                </a>
              </li>
              <li role="menuitem">
                <a (click)="onLogout()">
                  <i class="fa fa-fw fa-sign-out"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </li>
          <li
            #search
            class="search-item"
            [ngClass]="{ 'active-top-menu': app.activeTopbarItem === search }"
            (click)="app.onTopbarItemClick($event, search)"
          >
            <div class="topbar-search">
              <p-dropdown [options]="roleTypes" [(ngModel)]="selectedRole" optionLabel="label" dataKey="value"></p-dropdown>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class AppTopBarComponent {
  @Input()
  showMenuButton = true;

  @Input()
  roleTypes: RoleType[];

  _selectedRole: RoleType;

  constructor(public app: AppMainComponent, private store: Store<fromUser.State>, private confirmationService: ConfirmationService) {}

  onLogout() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to logout?',
      accept: () => this.logout(),
    });
  }

  get selectedRole() {
    return this._selectedRole;
  }

  set selectedRole(roleType: RoleType) {
    this.store.dispatch(UserActions.userRoleChange({ roleType }));
  }

  private logout() {
    this.store.dispatch(UserActions.userLogout());
  }
}
