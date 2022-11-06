import { createReducer, on } from '@ngrx/store';
import { Product } from 'app/@shared/api-interfaces';

import { ProductActions, ProductHistoryActions } from '../actions';

export const productHistoryFeatureKey = 'product-history';

export interface State {
  loaded: boolean;
  loading: boolean;
  productHistory: Product[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  productHistory: [],
};

export const reducer = createReducer(
  initialState,
  on(ProductHistoryActions.loadProductsHistory, (state) => ({
    ...state,
    loading: true,
  })),
  on(ProductHistoryActions.loadProductsHistorySuccess, (state, { products }) => ({
    productHistory: products,
    loading: false,
    loaded: true,
  })),
  on(ProductActions.transferProductSuccess, (state, { product }) => {
    return {
      ...state,
      productHistory: [...state.productHistory, product],
    };
  })
);

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getProductHistory = (state: State) => state.productHistory;
