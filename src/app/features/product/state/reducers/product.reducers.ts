import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Product } from 'app/@shared/api-interfaces';
import { UserActions } from 'app/@state/actions';

import { ProductActions } from '../actions';

export interface State extends EntityState<Product> {
  loaded: boolean;
  loading: boolean;
  selectedProductId: string;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product: Product) => product.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false,
  selectedProductId: null,
});

export const reducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, UserActions.userLoggedIn, (state) => ({ ...state, loading: true, loaded: false })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...adapter.addMany(products, state),
    loading: false,
    loaded: true,
  })),
  on(ProductActions.loadProductsFailure, (state) => ({ ...state, loading: false, loaded: false })),

  on(ProductActions.selectProduct, (state, { id }) => ({ ...state, selectedProductId: id })),
  on(ProductActions.clearSelectProduct, (state) => ({ ...state, selectedProductId: null })),

  on(ProductActions.addProduct, (state, { product }) => adapter.addOne(product, state)),
  on(ProductActions.updateProduct, (state, { product }) => adapter.updateOne({ id: product.id, changes: product }, state)),
  on(ProductActions.transferProductSuccess, (state, { product }) => adapter.removeOne(product.id, state))
);

export const selectLoaded = (state: State) => state.loaded;
export const selectLoading = (state: State) => state.loading;
export const selectId = (state: State) => state.selectedProductId;
