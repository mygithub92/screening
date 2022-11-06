import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { User } from 'app/@shared/api-interfaces';
import * as fromUser from 'app/@state/reducers';
import { Subscription } from 'rxjs';

import { MenuService } from './app.menu.service';

enum MenuOrientation {
  STATIC,
  OVERLAY,
  SLIM,
  HORIZONTAL,
}

@Component({
  selector: 'tt-main',
  templateUrl: './app.main.component.html',
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

  profileMode = 'inline';

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

  adminUserName = 'cf5cede4-f7e1-430e-b90c-61d24f2fff0a';

  user: User;

  menuModel = [
    {
      label: 'Product',
      icon: 'fa fa-fw fa-home',
      routerLink: 'product/product-list',
    },
    {
      label: 'History',
      icon: 'fa fa-fw fa-users',
      routerLink: 'product/history-list',
    },
  ];
  constructor(private router: Router, public renderer: Renderer2, private menuService: MenuService, private store: Store<fromUser.State>) {
    this.subscriptions = [];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit() {
    this.subscriptions.push(
      this.store.pipe(select(fromUser.selecUser)).subscribe((user) => {
        this.user = user;
        if (this.adminUserName === user.userName) {
          this.showSidebar = false;
          this.staticMenuDesktopInactive = true;
          this.router.navigate(['/main/admin']);
        } else {
          this.router.navigate(['/main/product']);
        }
      })
    );
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
