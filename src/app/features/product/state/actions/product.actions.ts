import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Product, User } from 'app/@shared/api-interfaces';

export const loadProducts = createAction('[Product API] Load Products', props<{ user: User }>());
export const loadProductsSuccess = createAction('[Product API] Load Products Success', props<{ products: Product[] }>());
export const loadProductsFailure = createAction('[Product API] Load Products Failure', props<{ error: string }>());

export const selectProduct = createAction('[Product API] Select Product', props<{ id: string }>());
export const clearSelectProduct = createAction('[Product API] Clear Select Product');

export const addProduct = createAction('[Product API] Add Product', props<{ product: Product }>());
export const addProductSuccess = createAction('[Product API] Add Product Success', props<{ product: Product }>());
export const addProductFailure = createAction('[Product API] Add Product Failure', props<{ error: string }>());

export const updateProduct = createAction('[Product API] Update Product', props<{ product: Product }>());
export const updateProductSuccess = createAction('[Product API] Update Product Success', props<{ product: Product }>());
export const updateProductFailure = createAction('[Product API] Update Product Failure', props<{ error: string }>());

export const transferProduct = createAction('[Product API] Transfer Product', props<{ product: Update<Product> }>());
export const transferProductSuccess = createAction('[Product API] Transfer Product Success', props<{ product: Product }>());
export const transferProductFailure = createAction('[Product API] Transfer Product Failure', props<{ error: string }>());
