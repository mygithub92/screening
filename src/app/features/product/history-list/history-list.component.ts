import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product } from 'app/@shared/api-interfaces';
import * as fromUser from 'app/@state/reducers';
import * as fromProduct from 'app/features/product/state/reducers';
import { cloneDeep } from 'lodash';
import { Observable, Subscription } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

import { FullProperySet, RolePropertyMap } from '../role.property.map';
import { ProductHistoryActions } from '../state/actions';

@Component({
  selector: 'tt-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss'],
})
export class HistoryListComponent implements OnInit, OnDestroy {
  loading$: Observable<boolean>;
  cols: any[];
  products: Product[];
  subscriptions: Subscription[];
  subCols: any[];
  isNotGrower = true;

  constructor(private userStore: Store<fromUser.State>, private productStore: Store<fromProduct.State>) {
    this.subscriptions = [];
  }

  ngOnInit() {
    this.subscriptions.push(
      this.productStore
        .pipe(select(fromProduct.selectHistoryLoaded), withLatestFrom(this.userStore.pipe(select(fromUser.selecUser))))
        .subscribe(([loaded, user]) => {
          if (!loaded) {
            this.productStore.dispatch(ProductHistoryActions.loadProductsHistory({ user }));
          }
        })
    );
    this.loading$ = this.productStore.pipe(select(fromProduct.selectLoading));
    this.subscriptions.push(
      this.userStore.pipe(select(fromUser.selectRole)).subscribe((role) => {
        this.isNotGrower = role.value !== 'GROWER';
        this.cols = RolePropertyMap[role.value];
        this.subCols = FullProperySet.filter((property) => !this.cols.find((col) => col.field === property.field));
      })
    );
    this.subscriptions.push(
      this.productStore.pipe(select(fromProduct.selectHistory)).subscribe((products) => {
        this.products = cloneDeep(products);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
