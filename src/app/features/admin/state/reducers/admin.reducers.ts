import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Account, RoleType } from 'app/@shared/api-interfaces';

import { AccountActions, AdminActions } from '../actions';

export interface State extends EntityState<Account> {
  loaded: boolean;
  loading: boolean;
  roleTypes: RoleType[];
  selectedAccountId: string | null;
}

export const adapter: EntityAdapter<Account> = createEntityAdapter<Account>({
  selectId: (account: Account) => account.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false,
  roleTypes: null,
  selectedAccountId: null
});

export const reducer = createReducer(
  initialState,
  on(AdminActions.loadAccounts, state => ({ ...state, loading: true, loaded: false })),
  on(AdminActions.loadAccountsSuccess, (state, { accounts, roleTypes }) => ({
    ...adapter.addMany(accounts, state),
    roleTypes,
    loading: false,
    loaded: true
  })),
  on(AdminActions.loadAccountsFailure, state => ({ ...state, loading: false, loaded: false })),
  on(AccountActions.selectAccount, (state, { accountId }) => ({ ...state, selectedAccountId: accountId })),
  on(AccountActions.clearSelectAccount, state => ({ ...state, selectedAccountId: null })),

  on(AccountActions.addAccount, (state, { account }) => adapter.addOne(account, state)),
  on(AccountActions.updateAccount, (state, { account }) => adapter.updateOne(account, state))
);

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getId = (state: State) => state.selectedAccountId;
export const getRoleTypes = (state: State) => state.roleTypes;
