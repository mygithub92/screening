import { Component, OnInit } from '@angular/core';
import { RouteStateService } from 'app/@core/services/route-state.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header-breadcrumb',
  templateUrl: 'header-breadcrumb.component.html',
  styleUrls: ['header-breadcrumb.component.css']
})
export class HeaderBreadcrumbComponent implements OnInit {

  items: MenuItem[];

  home: MenuItem;


  constructor(private routeStateService: RouteStateService) {
    this.items = [];
  }

  ngOnInit() {
    var routes = this.routeStateService.getAll();
    routes.forEach(route => {
      this.items.push({ label: route.title, command: () => { this.onClickBreadcrumb(route.id); } });
    });

    this.home = { icon: 'pi pi-home' };
  }

  onClickBreadcrumb(id: number) {
    this.routeStateService.loadById(id);
  }
}