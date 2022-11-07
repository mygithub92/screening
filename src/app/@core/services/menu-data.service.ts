import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CustomMenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: "root",
})
export class MenuDataService {
  public toggleMenuBar: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  getMenuList(): CustomMenuItem[] {
    return [
      {
        Label: "Product",
        Icon: "fa-home",
        RouterLink: "/product/product-list",
        Childs: null,
        IsChildVisible: false,
      },
    ];
  }
}
