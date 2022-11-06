import { createReducer, on } from '@ngrx/store';
import { RoleType, User } from 'app/@shared/api-interfaces';

import { UserActions } from '../actions';

export const userFeatureKey = 'userState';

export interface State {
  user: User;
  selectedRole: RoleType;
}

const initialState: State = {
  user: null,
  selectedRole: null
};

export const reducer = createReducer(
  initialState,
  on(UserActions.userLoggedIn, (state, { user }) => ({ ...state, user, selectedRole: user.roleTypes[0] })),
  on(UserActions.userRoleChange, (state, { roleType }) => ({
    ...state,
    selectedRole: roleType
  }))
);

export const selectUser = (state: State) => state.user;
export const selectRole = (state: State) => state.selectedRole;
