import { createAction, props } from '@ngrx/store';
import { Account, RoleType } from 'app/@shared/api-interfaces';

export const loadAccounts = createAction('[Admin API] Load Account');

export const loadAccountsSuccess = createAction(
  '[Admin API] Load Account Success',
  props<{ accounts: Account[]; roleTypes: RoleType[] }>()
);

export const loadAccountsFailure = createAction('[Admin API] Load Account Failure', props<{ error: any }>());
