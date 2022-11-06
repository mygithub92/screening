import { Component, OnInit } from '@angular/core';

import { MenuDataService } from '../../@core/services/menu-data.service';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.css']
})
export class LayoutComponent implements OnInit {
  isMenuVisible = true;

  constructor(private menuDataService: MenuDataService) {}

  ngOnInit() {
    var that = this;
    this.menuDataService.toggleMenuBar.subscribe(function(data: any) {
      if (data && data != null) {
        that.isMenuVisible = !that.isMenuVisible;
      }
    });
  }

  ngOnDestroy() {
    this.menuDataService.toggleMenuBar.observers.forEach(function(element) {
      element.complete();
    });
  }
}
