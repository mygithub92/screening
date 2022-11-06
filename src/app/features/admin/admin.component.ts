import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AdminActions } from './state/actions';
import * as fromAdmin from './state/reducers';

@Component({
  selector: 'tt-admin',
  template: `
    <p-blockUI [blocked]="true"></p-blockUI>
  `
})
export class AdminComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(private store: Store<fromAdmin.State>, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(AdminActions.loadAccounts());
    this.subscription = this.store
      .pipe(select(fromAdmin.selectLoaded))
      .pipe(filter(loaded => loaded))
      .subscribe(() => this.router.navigate(['manage'], { relativeTo: this.route }));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
