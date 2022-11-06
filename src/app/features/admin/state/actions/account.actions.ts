import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Account } from 'app/@shared/api-interfaces';

export const selectAccount = createAction('[Account API] Select Account', props<{ accountId: string }>());
export const clearSelectAccount = createAction('[Account API] Clear Selected Account');
export const addAccount = createAction('[Account API] Add Account', props<{ account: Account }>());
export const addAccountSuccess = createAction('[Account API] Add Account Success', props<{ account: Account }>());
export const addAccountFailure = createAction('[Account API] Add Account Failure', props<{ account: Account }>());

export const updateAccount = createAction('[Account API] Update Account', props<{ account: Update<Account> }>());
export const updateAccountSuccess = createAction('[Account API] Update Account Success', props<{ account: Account }>());
export const updateAccountFailure = createAction('[Account API] Update Account Failure', props<{ error: string }>());

export const deleteAccount = createAction('[Account API] Delete Account', props<{ account: Account }>());
export const deleteAccountSuccess = createAction('[Account API] Delete Account Success', props<{ account: Account }>());
export const deleteAccountFailure = createAction('[Account API] Delete Account Failure', props<{ account: Account }>());
