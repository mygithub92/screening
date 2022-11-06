import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as fromUser from 'app/@state/reducers';
import * as fromProduct from 'app/features/product/state/reducers';
import { Observable, of } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

import { ProductActions } from '../state/actions';

@Injectable({
  providedIn: 'root'
})
export class ProductsLoadedGuard implements CanActivate {
  constructor(private store: Store<fromProduct.State>, private userStore: Store<fromUser.State>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    this.store
      .pipe(
        select(fromProduct.selectLoaded),
        withLatestFrom(this.userStore.pipe(select(fromUser.selecUser)))
      )
      .subscribe(results => {
        if (!results[0]) {
          this.store.dispatch(ProductActions.loadProducts({ user: results[1] }));
        }
      });
    return of(true);
  }
}
