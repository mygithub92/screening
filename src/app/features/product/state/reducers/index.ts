import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from 'app/@state/reducers';

import * as fromProductHistory from './product-history.refucers';
import * as fromProduct from './product.reducers';

export const productFeatureKey = 'product';

export interface ProductState {
  [productFeatureKey]: fromProduct.State;
  [fromProductHistory.productHistoryFeatureKey]: fromProductHistory.State;
}

export interface State extends fromRoot.State {
  [productFeatureKey]: ProductState;
}

export function reducers(state: ProductState | undefined, action: Action) {
  return combineReducers({
    [productFeatureKey]: fromProduct.reducer,
    [fromProductHistory.productHistoryFeatureKey]: fromProductHistory.reducer,
  })(state, action);
}

export const selectProductsState = createFeatureSelector<State, ProductState>(productFeatureKey);

export const selectProductEntitiesState = createSelector(selectProductsState, (state) => state.product);

export const selectSelectedProductId = createSelector(selectProductEntitiesState, fromProduct.selectId);

export const selectLoading = createSelector(selectProductEntitiesState, fromProduct.selectLoading);

export const selectLoaded = createSelector(selectProductEntitiesState, fromProduct.selectLoaded);

export const selectProductHistoryEntitiesState = createSelector(
  selectProductsState,
  (state) => state[fromProductHistory.productHistoryFeatureKey]
);

export const selectHistory = createSelector(selectProductHistoryEntitiesState, fromProductHistory.getProductHistory);
export const selectHistoryLoading = createSelector(selectProductHistoryEntitiesState, fromProductHistory.getLoading);
export const selectHistoryLoaded = createSelector(selectProductHistoryEntitiesState, fromProductHistory.getLoaded);

export const {
  selectIds: selectProductIds,
  selectEntities: selectProductEntities,
  selectAll: selectAllProducts,
  selectTotal: selectTotalProducts,
} = fromProduct.adapter.getSelectors(selectProductEntitiesState);

export const selectSelectedProduct = createSelector(selectProductEntities, selectSelectedProductId, (entities, selectedId) => {
  return selectedId && entities[selectedId];
});
