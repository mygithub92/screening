import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { AccountActions } from '../state/actions';
import * as fromAccount from '../state/reducers';
import { formServiceProvider } from './services/form.service.provider';

@Component({
  selector: 'tt-add-edit-account',
  template: `
    <div>
      <p-confirmDialog header="Confirmation" icon="pi pi-exclamation-triangle"></p-confirmDialog>
      <router-outlet></router-outlet>
    </div>
  `,
  providers: [formServiceProvider]
})
export class AddEditAccountComponent implements OnInit, OnDestroy {
  actionsSubscription: Subscription;

  constructor(private store: Store<fromAccount.State>, route: ActivatedRoute) {
    this.actionsSubscription = route.params
      .pipe(
        map(params => {
          if (params.id === '-1') {
            return AccountActions.clearSelectAccount();
          }
          return AccountActions.selectAccount({ accountId: params.id });
        })
      )
      .subscribe(action => this.store.dispatch(action));
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.actionsSubscription.unsubscribe();
  }
}
