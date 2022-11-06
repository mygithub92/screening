import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { User } from 'app/@shared/api-interfaces';
import { UserActions } from 'app/@state/actions';
import * as fromUser from 'app/@state/reducers';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'tt-inline-profile',
  template: `
    <p-confirmDialog header="Confirmation" icon="pi pi-exclamation-triangle"></p-confirmDialog>
    <div class="profile" [ngClass]="{ 'profile-expanded': active }">
      <a href="#" (click)="onClick($event)">
        <img class="profile-image" src="assets/layout/images/avatar.png" />
        <span class="profile-name">{{ (user$ | async).email }}</span>
        <i class="fa fa-fw fa-caret-down"></i>
        <span class="profile-role">Marketing</span>
      </a>
    </div>

    <ul id="profile-menu" class="layout-menu" [@menu]="active ? 'visible' : 'hidden'">
      <li role="menuitem">
        <a href="#" [attr.tabindex]="!active ? '-1' : null">
          <i class="fa fa-fw fa-user"></i>
          <span>Profile</span>
        </a>
        <div class="layout-menu-tooltip">
          <div class="layout-menu-tooltip-arrow"></div>
          <div class="layout-menu-tooltip-text">Profile</div>
        </div>
      </li>
      <li role="menuitem">
        <a href="#" [attr.tabindex]="!active ? '-1' : null">
          <i class="fa fa-fw fa-user-secret"></i>
          <span>Privacy</span>
        </a>
        <div class="layout-menu-tooltip">
          <div class="layout-menu-tooltip-arrow"></div>
          <div class="layout-menu-tooltip-text">Privacy</div>
        </div>
      </li>
      <li role="menuitem">
        <a href="#" [attr.tabindex]="!active ? '-1' : null">
          <i class="fa fa-fw fa-cog"></i>
          <span>Settings</span>
        </a>
        <div class="layout-menu-tooltip">
          <div class="layout-menu-tooltip-arrow"></div>
          <div class="layout-menu-tooltip-text">Settings</div>
        </div>
      </li>
      <li role="menuitem">
        <a [attr.tabindex]="!active ? '-1' : null" (click)="onLogout()">
          <i class="fa fa-fw fa-sign-out"></i>
          <span>Logout</span>
        </a>
        <div class="layout-menu-tooltip">
          <div class="layout-menu-tooltip-arrow"></div>
          <div class="layout-menu-tooltip-text">Logout</div>
        </div>
      </li>
    </ul>
  `,
  animations: [
    trigger('menu', [
      state(
        'hidden',
        style({
          height: '0px',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ]),
  ],
})
export class AppProfileComponent implements OnInit {
  active: boolean;
  user$: Observable<User>;

  constructor(private store: Store<fromUser.State>, private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(fromUser.selecUser));
  }

  onClick(event) {
    this.active = !this.active;
    event.preventDefault();
  }

  onLogout() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to logout?',
      accept: () => this.logout(),
    });
  }

  private logout() {
    this.store.dispatch(UserActions.userLogout());
  }
}
