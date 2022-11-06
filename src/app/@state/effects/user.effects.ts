import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'app/@core/services/auth.service';
import { map } from 'rxjs/operators';

import { UserActions } from '../actions';

@Injectable()
export class UserEffects {
  constructor(private authService: AuthService, private actions$: Actions) {}

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.userLogout),
        map(() => this.authService.signOut())
      ),
    { dispatch: false }
  );
}
