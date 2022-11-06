import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Product, User } from 'app/@shared/api-interfaces';
import { DateUtils } from 'app/@shared/utils/date-utils';
import * as fromUser from 'app/@state/reducers';
import * as fromProduct from 'app/features/product/state/reducers';
import { cloneDeep } from 'lodash';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

import { RolePropertyMap } from '../role.property.map';
import { ProductActions } from '../state/actions';

export class FormService {
  private _form: FormGroup;
  private _subscriptions: Subscription[];
  private selectedProduct: Product;
  currentUser: User;

  constructor(private fb: FormBuilder, private productStore: Store<fromProduct.State>, private userStore: Store<fromUser.State>) {
    this._subscriptions = [];
    this._subscriptions.push(
      this.userStore.pipe(select(fromUser.selectRole)).subscribe(role => {
        const fields = RolePropertyMap[role.value] as any[];
        const formGroupObj = { id: null };
        fields.reduce((accumulator, currentValue) => {
          accumulator[currentValue.field] = [null, [Validators.required]];
          return accumulator;
        }, formGroupObj);
        this._form = this.fb.group(formGroupObj);
      })
    );
    this._subscriptions.push(
      this.userStore.pipe(select(fromUser.selecUser)).subscribe(user => {
        this.currentUser = user;
      })
    );

    this._subscriptions.push(
      this.productStore
        .pipe(
          select(fromProduct.selectSelectedProduct),
          filter(product => !!product),
          map(product => cloneDeep(product))
        )
        .subscribe((product: Product) => {
          new DateUtils().convertToDate(product);
          this.selectedProduct = product;
          this._form.patchValue(product);
        })
    );
  }

  get form(): FormGroup {
    return this._form;
  }

  get isEdit(): boolean {
    return !!this._form.get('id').value;
  }

  public save() {
    const product = this._form.value;
    if (product.id) {
      this.productStore.dispatch(ProductActions.updateProduct({ product }));
    } else {
      product.id = uuidv4();
      const user = { userName: this.currentUser.userName, role: 'GROWER' };
      product.currentUser = user;
      product.ownerships = [{ user, date: new Date().toString() }];
      this.productStore.dispatch(ProductActions.addProduct({ product }));
    }
  }

  public unsubscibe() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe);
  }
}
