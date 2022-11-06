import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataService } from 'app/@core/services/data.service';
import { Product } from 'app/@shared/api-interfaces';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ProductActions } from '../actions';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private service: DataService) {}

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap((user) =>
        this.service.getProducts(user as any).pipe(
          map((products: Product[]) => ProductActions.loadProductsSuccess({ products })),
          catchError((error) => of(ProductActions.loadProductsFailure({ error })))
        )
      )
    )
  );

  add$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.addProduct),
      switchMap((product) =>
        this.service.addProduct(product as any).pipe(
          map((product: Product) => ProductActions.addProductSuccess({ product })),
          catchError((error) => of(ProductActions.addProductFailure({ error })))
        )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.updateProduct),
      switchMap((updatingProduct) =>
        this.service.updateProduct(updatingProduct.product).pipe(
          map((product: Product) => ProductActions.updateProductSuccess({ product })),
          catchError((error) => of(ProductActions.updateProductFailure({ error })))
        )
      )
    )
  );

  transfer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.transferProduct),
      switchMap((updatingProduct) =>
        this.service.transferProduct(updatingProduct.product).pipe(
          map((product: Product) => ProductActions.transferProductSuccess({ product })),
          catchError((error) => of(ProductActions.transferProductFailure({ error })))
        )
      )
    )
  );
}
