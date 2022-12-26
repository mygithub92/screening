import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { UserActions } from "app/@state/actions";
import * as fromUser from "app/@state/reducers";
import { ConfirmationService } from "primeng/api";

import { AuthService } from "./@core/services/auth.service";
import { AppMainComponent } from "./app.main.component";

@Component({
  selector: "tt-topbar",
  template: `
    <p-confirmDialog
      header="Confirmation"
      icon="pi pi-exclamation-triangle"
    ></p-confirmDialog>
    <div class="topbar clearfix">
      <div class="topbar-left">
        <a routerLink="/">
          <img
            src="assets/images/regulatorsto-logo-medical-testing-services-toronto-svg.png"
            class="topbar-logo"
            routerLink="/"
          />
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

        <a
          id="topbar-menu-button"
          href="#"
          (click)="app.onTopbarMenuButtonClick($event)"
        >
          <i class="fa fa-bars"></i>
        </a>

        <ul
          class="topbar-items fadeInDown"
          [ngClass]="{ 'topbar-items-visible': app.topbarMenuActive }"
        >
          <li
            #profile
            class="profile-item"
            [ngClass]="{ 'active-top-menu': app.activeTopbarItem === profile }"
          >
            <a href="#" (click)="app.onTopbarItemClick($event, profile)">
              <img class="profile-image" src="assets/images/avatar.png" />
              <span class="topbar-item-name">{{ user?.attributes?.name }}</span>
              <span class="topbar-item-role">{{ role }}</span>
            </a>

            <ul class="layout-menu fadeInDown">
              <li role="menuitem">
                <a (click)="onLogout()">
                  <i class="fa fa-fw fa-sign-out"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class AppTopBarComponent implements OnInit {
  @Input()
  showMenuButton = true;
  user: any;
  role;

  constructor(
    public app: AppMainComponent,
    private store: Store<fromUser.State>,
    private confirmationService: ConfirmationService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentAuthenticatedUser().subscribe((user: any) => {
      this.user = user;
      const groups =
        user.signInUserSession.accessToken.payload["cognito:groups"];
      if (groups) {
        this.role = groups[0];
      } else {
        this.role = "Crew";
      }
    });
  }

  onLogout() {
    this.confirmationService.confirm({
      message: "Are you sure that you want to logout?",
      accept: () => this.logout(),
    });
  }

  onProfileClick() {
    this.router.navigate(["main", { path: "profile-topbar" }]);
  }

  onScreeningClick() {
    this.router.navigate(["main", { path: "screening-topbar" }]);
  }

  private logout() {
    this.store.dispatch(UserActions.userLogout());
  }
}
