import { createAction, props } from '@ngrx/store';
import { Product, User } from 'app/@shared/api-interfaces';

export const loadProductsHistory = createAction('[Product History API] Load Products History', props<{ user: User }>());
export const loadProductsHistorySuccess = createAction(
  '[Product History API] Load Products History Success',
  props<{ products: Product[] }>()
);
export const loadProductsHistoryFailure = createAction('[Product History API] Load Products History Failure', props<{ error: string }>());
