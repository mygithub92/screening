import { InjectionToken } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import { Action, ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from 'environments/environment';

import * as fromUser from './user.reducers';

export interface State {
  router: fromRouter.RouterReducerState<any>;
  [fromUser.userFeatureKey]: fromUser.State;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>('Root reducers token', {
  factory: () => ({
    router: fromRouter.routerReducer,
    userState: fromUser.reducer
  })
});

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];

export const selectUserState = createFeatureSelector<State, fromUser.State>(fromUser.userFeatureKey);

export const selecUser = createSelector(
  selectUserState,
  fromUser.selectUser
);

export const selectRole = createSelector(
  selectUserState,
  fromUser.selectRole
);
