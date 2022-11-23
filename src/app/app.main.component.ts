import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/@shared/api-interfaces';
import { Subscription } from 'rxjs';

import { AuthService } from './@core/services/auth.service';
import { MenuService } from './app.menu.service';

enum MenuOrientation {
  STATIC,
  OVERLAY,
  SLIM,
  HORIZONTAL,
}

@Component({
  selector: "tt-main",
  templateUrl: "./app.main.component.html",
  styles: [
    `
      #container {
        min-height: 100%;
        position: relative;
      }
      #footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px; /* Height of the footer */
      }
    `,
  ],
})
export class AppMainComponent implements OnInit, OnDestroy {
  layoutMode: MenuOrientation = MenuOrientation.STATIC;

  subscriptions: Subscription[];

  darkMenu = false;

  profileMode = "inline";

  rotateMenuButton: boolean;

  topbarMenuActive: boolean;

  overlayMenuActive: boolean;

  staticMenuDesktopInactive: boolean;

  staticMenuMobileActive: boolean;

  layoutMenuScroller: HTMLDivElement;

  menuClick: boolean;

  topbarItemClick: boolean;

  activeTopbarItem: any;

  menuHoverActive: boolean;

  configActive: boolean;

  configClick: boolean;
  showSidebar = true;

  adminUserName = "cf5cede4-f7e1-430e-b90c-61d24f2fff0a";

  user: User;

  menuModel = [];
  constructor(
    private router: Router,
    public renderer: Renderer2,
    private menuService: MenuService,
    private authService: AuthService
  ) {
    this.subscriptions = [];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit() {
    this.authService.getCurrentAuthenticatedUser().subscribe((user: any) => {
      console.log(user);
      const groups =
        user.signInUserSession.accessToken.payload["cognito:groups"];
      if (groups && groups.length) {
        if (groups[0] === "Admin") {
          this.menuModel.push(
            {
              label: "Jobs",
              icon: "fa fa-fw fa-tasks",
              routerLink: "admin/jobs",
            },
            {
              label: "Forms",
              icon: "fa fa-fw fa-newspaper-o",
              routerLink: "admin/forms",
            },
            {
              label: "Crew",
              icon: "fa fa-fw fa-users",
              routerLink: "admin/crew",
            }
          );
          this.router.navigate(["/main/admin"]);
        }
        if (groups[0] === "Stuff") {
          this.menuModel.push(
            {
              label: "Screenings",
              icon: "fa fa-fw fa-home",
              routerLink: "product/product-list",
            },
            {
              label: "Crew",
              icon: "fa fa-fw fa-home",
              routerLink: "product/product-list",
            }
          );
          this.router.navigate(["/main/admin"]);
        }
      } else {
        this.router.navigate(["/main/product"]);
      }
    });
  }

  onLayoutClick() {
    if (!this.topbarItemClick) {
      this.activeTopbarItem = null;
      this.topbarMenuActive = false;
    }

    if (!this.menuClick) {
      if (this.isHorizontal() || this.isSlim()) {
        this.menuService.reset();
      }

      if (this.overlayMenuActive || this.staticMenuMobileActive) {
        this.hideOverlayMenu();
      }

      this.menuHoverActive = false;
    }

    if (this.configActive && !this.configClick) {
      this.configActive = false;
    }

    this.configClick = false;
    this.topbarItemClick = false;
    this.menuClick = false;
  }

  onMenuButtonClick(event) {
    this.menuClick = true;
    this.rotateMenuButton = !this.rotateMenuButton;
    this.topbarMenuActive = false;

    if (this.layoutMode === MenuOrientation.OVERLAY) {
      this.overlayMenuActive = !this.overlayMenuActive;
    } else {
      if (this.isDesktop()) {
        this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
      } else {
        this.staticMenuMobileActive = !this.staticMenuMobileActive;
      }
    }

    event.preventDefault();
  }

  onMenuClick($event) {
    this.menuClick = true;
  }

  onTopbarMenuButtonClick(event) {
    this.topbarItemClick = true;
    this.topbarMenuActive = !this.topbarMenuActive;

    this.hideOverlayMenu();

    event.preventDefault();
  }

  onTopbarItemClick(event, item) {
    this.topbarItemClick = true;

    if (this.activeTopbarItem === item) {
      this.activeTopbarItem = null;
    } else {
      this.activeTopbarItem = item;
    }

    event.preventDefault();
  }

  onTopbarSubItemClick(event) {
    event.preventDefault();
  }

  onConfigClick(event) {
    this.configClick = true;
  }

  hideOverlayMenu() {
    this.rotateMenuButton = false;
    this.overlayMenuActive = false;
    this.staticMenuMobileActive = false;
  }

  isTablet() {
    const width = window.innerWidth;
    return width <= 1024 && width > 640;
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }

  isMobile() {
    return window.innerWidth <= 640;
  }

  isStatic() {
    return this.layoutMode === MenuOrientation.STATIC;
  }

  isOverlay() {
    return this.layoutMode === MenuOrientation.OVERLAY;
  }

  isHorizontal() {
    return this.layoutMode === MenuOrientation.HORIZONTAL;
  }

  isSlim() {
    return this.layoutMode === MenuOrientation.SLIM;
  }

  changeToStaticMenu() {
    this.layoutMode = MenuOrientation.STATIC;
  }

  changeToOverlayMenu() {
    this.layoutMode = MenuOrientation.OVERLAY;
  }

  changeToHorizontalMenu() {
    this.layoutMode = MenuOrientation.HORIZONTAL;
  }

  changeToSlimMenu() {
    this.layoutMode = MenuOrientation.SLIM;
  }
}
