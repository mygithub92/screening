import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Account } from 'app/@shared/api-interfaces';
import { cloneDeep } from 'lodash';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { AccountActions } from '../../state/actions';
import * as fromAdmin from '../../state/reducers';

export class FormService {
  private _form: FormGroup;
  private _subscription: Subscription;

  constructor(private fb: FormBuilder, private store: Store<fromAdmin.State>) {
    this._form = this.fb.group({
      id: [null],
      companyName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      isActive: [null, [Validators.required]],
      accountType: [null, [Validators.required]],
      address: [null, [Validators.required]],
      roles: this.fb.array([], [Validators.required]),
      partners: this.fb.array([], [Validators.required])
    });

    this._subscription = this.store
      .pipe(
        select(fromAdmin.selectAccount),
        filter(account => !!account),
        map(account => cloneDeep(account))
      )
      .subscribe((account: Account) => {
        this._form.patchValue(account);
        const roles = this._form.get('roles') as FormArray;
        account.roles.forEach(role => roles.push(new FormControl(role)));
      });
  }

  get form(): FormGroup {
    return this._form;
  }

  get isEdit(): boolean {
    return !!this._form.get('id').value;
  }

  public unsubscibe() {
    this._subscription.unsubscribe();
  }

  public save() {
    const partners = this._form.value.partners.map(partner => ({
      partnerCompanyId: partner.account.id,
      roleId: partner.role.id,
      isActive: partner.role.isActive
    }));
    const account = { ...this._form.value, partners };
    if (account.id) {
      const updateAccount = { id: account.id, changes: account };
      this.store.dispatch(AccountActions.updateAccount({ account: updateAccount }));
    } else {
      this.store.dispatch(AccountActions.addAccount({ account }));
    }
  }
}
