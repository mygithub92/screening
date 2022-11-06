import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Account } from 'app/@shared/api-interfaces';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import * as fromAdmin from '../../../state/reducers';

@Component({
  selector: 'tt-partner-dialog',
  templateUrl: './partner-dialog.component.html',
  styleUrls: ['./partner-dialog.component.scss']
})
export class PartnerDialogComponent implements OnInit, OnDestroy {
  partnerForm: FormGroup;
  accounts: Account[];
  roles = [];
  subcriptions = [];

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private store: Store<fromAdmin.State>) {}

  ngOnInit(): void {
    this.partnerForm = this.config.data.partnerForm;
    this.subcriptions.push(this.store.pipe(select(fromAdmin.selectAccounts)).subscribe(accounts => (this.accounts = accounts)));
    this.subcriptions.push(
      this.partnerForm.controls['account'].valueChanges.subscribe(value => {
        this.populateRoles(value);
      })
    );
    if (this.accountForm.value) {
      this.accountForm.patchValue(this.accounts.find(account => account.id === this.accountForm.value.id));
    }
  }

  private populateRoles(account) {
    if (account) {
      this.roles = account.roles.map(role => ({ ...role, label: role.type.label }));
    }
  }

  save() {
    this.partnerForm.markAllAsTouched();
    if (this.partnerForm.valid) {
      this.ref.close(this.partnerForm);
    }
  }

  get accountForm(): FormControl {
    return this.partnerForm.controls['account'] as FormControl;
  }

  cancel() {
    this.ref.close(null);
  }

  ngOnDestroy(): void {
    this.subcriptions.forEach(subsciption => subsciption.unsubscribe());
  }
}
