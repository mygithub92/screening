import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataService } from 'app/@core/services/data.service';
import { Account } from 'app/@shared/api-interfaces';
import { forkJoin, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { AccountActions, AdminActions } from '../actions';

@Injectable()
export class AdminEffects {
  constructor(private actions$: Actions, private service: DataService) {}

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.loadAccounts),
      switchMap(() => forkJoin(this.service.getAccounts(), this.service.getRoles())),
      map((result: any) => AdminActions.loadAccountsSuccess({ accounts: result[0], roleTypes: result[1] })),
      catchError(error => of(AdminActions.loadAccountsFailure({ error })))
    )
  );

  addAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.addAccount),
      mergeMap(({ account }) =>
        this.service.addAccount(account).pipe(
          map(() => AccountActions.addAccountSuccess({ account })),
          catchError(() => of(AccountActions.addAccountFailure({ account })))
        )
      )
    )
  );

  updateAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.updateAccount),
      mergeMap(({ account }) =>
        this.service.updateAccount(account.changes as Account).pipe(
          map(updatedAccount => AccountActions.updateAccountSuccess({ account: updatedAccount })),
          catchError(error => of(AccountActions.updateAccountFailure({ error })))
        )
      )
    )
  );
}
