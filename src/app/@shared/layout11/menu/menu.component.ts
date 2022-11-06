import { Component, OnInit } from '@angular/core';

import { CustomMenuItem } from '../../../@core/models/menu-item.model';
import { ApplicationStateService } from '../../../@core/services/application-state.service';
import { MenuDataService } from '../../../@core/services/menu-data.service';
import { RouteStateService } from '../../../@core/services/route-state.service';
import { SessionService } from '../../../@core/services/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {
  items: CustomMenuItem[];
  selectedItem: string;
  visible: boolean;

  constructor(
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    private menuDataService: MenuDataService,
    private applicationStateService: ApplicationStateService
  ) {}

  ngOnInit() {
    this.items = this.menuDataService.getMenuList();

    var that = this;
    this.menuDataService.toggleMenuBar.subscribe((data: any) => {
      if (data && data != null) {
        that.visible = !that.visible;
      }
    });

    if (this.applicationStateService.getIsMobileResolution()) {
      this.visible = false;
    } else {
      this.visible = true;
    }

    var activeMenu = this.sessionService.getItem('active-menu');
    if (activeMenu) {
      this.selectedItem = activeMenu;
    } else {
      this.selectedItem = 'Product';
    }
  }

  ngOnDestroy() {
    this.menuDataService.toggleMenuBar.observers.forEach(element => {
      element.complete();
    });
  }

  onMenuClick(menu: CustomMenuItem) {
    if (menu.Childs != undefined || menu.Childs != null) {
      this.toggleSubMenu(menu);
      return;
    }
    if (menu.RouterLink == undefined || menu.RouterLink == null || menu.RouterLink == '') {
      this.routeStateService.add('Error 404', '/error', null, false);
      return;
    }
    this.selectedItem = menu.Label;
    this.sessionService.setItem('active-menu', menu.Label);
    this.routeStateService.add(menu.Label, menu.RouterLink, null, true);
    setTimeout(() => {
      if (this.applicationStateService.getIsMobileResolution()) {
        this.visible = false;
      }
    }, 100);
  }

  toggleSubMenu(menu: CustomMenuItem) {
    menu.IsChildVisible = !menu.IsChildVisible;
  }
}
