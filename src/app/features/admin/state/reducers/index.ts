import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { Account, PartnerDetails } from 'app/@shared/api-interfaces';
import * as fromRoot from 'app/@state/reducers';

import * as fromAdmin from './admin.reducers';

export const amdinFeatureKey = 'admin';

export interface AdminState {
  [amdinFeatureKey]: fromAdmin.State;
}

export interface State extends fromRoot.State {
  [amdinFeatureKey]: AdminState;
}

export const reducers: ActionReducerMap<AdminState, any> = {
  admin: fromAdmin.reducer
};

export const selectAdminModuleState = createFeatureSelector<State, AdminState>(amdinFeatureKey);

export const selectAdminState = createSelector(
  selectAdminModuleState,
  state => state.admin
);

export const selectAccountId = createSelector(
  selectAdminState,
  fromAdmin.getId
);

export const selectLoading = createSelector(
  selectAdminState,
  fromAdmin.getLoading
);

export const selectLoaded = createSelector(
  selectAdminState,
  fromAdmin.getLoaded
);

export const selectShowSpinner = createSelector(
  selectLoading,
  selectLoaded,
  (loading, loaded) => loading && !loaded
);

export const { selectIds: selectAccountIds, selectEntities: selectAccountEntities } = fromAdmin.adapter.getSelectors(selectAdminState);

export const selectAccount = createSelector(
  selectAccountEntities,
  selectAccountId,
  (entities, selectedId: string) => {
    return entities[selectedId];
  }
);

export const selectAccounts = createSelector(
  selectAccountEntities,
  selectAccountIds,
  (entities, ids: Array<number>) => {
    return ids.map(id => entities[id]);
  }
);

export const selectRoleTypes = createSelector(
  selectAdminState,
  fromAdmin.getRoleTypes
);

export const selectPartners = createSelector(
  selectAccountEntities,
  selectAccount,
  (entities, selectAccount) => {
    if (!selectAccount) {
      return [];
    }
    return selectAccount.partners.map(partner => {
      const account = entities[partner.partnerCompanyId];
      const role = account.roles.find(role => role.id === partner.roleId);
      return { account, role } as PartnerDetails;
    });
  }
);

export const selectPartnersByAccount = (account: Account) =>
  createSelector(
    selectAccountEntities,
    entities => {
      if (!account) {
        return [];
      }
      return account.partners.map(partner => {
        const account = entities[partner.partnerCompanyId];
        const role = account?.roles.find(role => role.id === partner.roleId);

        return { ...role, companyName: account.companyName };
      });
    }
  );
