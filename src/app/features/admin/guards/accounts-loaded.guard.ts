import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { DataService } from 'app/@core/services/data.service';
import { Observable, of } from 'rxjs';

import { AdminActions } from '../state/actions';
import * as fromAdmin from '../state/reducers';

@Injectable({
  providedIn: 'root'
})
export class AccountsLoadedGuard implements CanActivate {
  constructor(private store: Store<fromAdmin.State>, private service: DataService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    this.store.pipe(select(fromAdmin.selectLoaded)).subscribe(loaded => {
      if (!loaded) {
        this.store.dispatch(AdminActions.loadAccounts());
      }
    });
    return of(true);
  }
}
