import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataService } from 'app/@core/services/data.service';
import { Product } from 'app/@shared/api-interfaces';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ProductHistoryActions } from '../actions';

@Injectable()
export class ProductHistoryEffects {
  constructor(private actions$: Actions, private service: DataService) {}

  loadHistory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductHistoryActions.loadProductsHistory),
      switchMap((user) =>
        this.service.getProducts(user as any).pipe(
          map((products: Product[]) => ProductHistoryActions.loadProductsHistorySuccess({ products })),
          catchError((error) => of(ProductHistoryActions.loadProductsHistoryFailure({ error })))
        )
      )
    )
  );
}
