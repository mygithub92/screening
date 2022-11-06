import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Account, PartnerDetails, Role, RoleType } from 'app/@shared/api-interfaces';
import { DialogService } from 'primeng/dynamicdialog';

import * as fromAdmin from '../../state/reducers';
import { FormService } from '../services/form.service';
import { PartnerDialogComponent } from './partner-dialog/partner-dialog.component';

@Component({
  selector: 'tt-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
})
export class PartnerComponent implements OnInit, OnDestroy {
  form: FormGroup;
  cols = [];
  subscriptions = [];
  tablePartners = new Array<PartnerTable>();
  partners = new Array<PartnerDetails>();
  title = 'Add Partner';

  constructor(
    private formService: FormService,
    private router: Router,
    private route: ActivatedRoute,
    public dialogService: DialogService,
    private fb: FormBuilder,
    private store: Store<fromAdmin.State>
  ) {
    this.form = this.formService.form;
    if (this.formService.isEdit) {
      this.title = 'Edit Partner';
    }
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'companyName', header: 'Company Name' },
      { field: 'name', header: 'Partner Role' },
      { field: 'type', header: 'Role Type' },
      { field: 'isActive', header: 'Status' },
      { field: 'location', header: 'Location' },
    ];

    this.subscriptions.push(
      this.store.pipe(select(fromAdmin.selectPartners)).subscribe((partners) => {
        this.partners = partners;
        partners.forEach((partner) => {
          this.tablePartners.push(this.convertToPartnerTable(partner));
        });
      })
    );
  }

  getPartnerFormGroup(index: number): FormGroup {
    const partnerFormGroup = this.fb.group({
      account: [null, [Validators.required]],
      role: [null, [Validators.required]],
      isActive: [null, [Validators.required]],
    });
    if (index > -1) {
      partnerFormGroup.patchValue(this.convertToForm(this.partners[index]));
    }
    return partnerFormGroup;
  }

  show(partnerIndex: number) {
    const ref = this.dialogService.open(PartnerDialogComponent, {
      data: {
        partnerForm: this.getPartnerFormGroup(partnerIndex),
      },
      closable: false,
      header: partnerIndex < 0 ? 'Add Partner' : 'Edit Partner',
      width: '50%',
    });

    this.subscriptions.push(
      ref.onClose.subscribe((partnerForm: FormGroup) => {
        if (partnerForm) {
          const response = this.convertToPartnerDetails(partnerForm.value);
          if (partnerIndex === -1) {
            this.partners.push(response);
            this.tablePartners.push(this.convertToPartnerTable(response));
          } else {
            this.partners.splice(partnerIndex, 1, response);
            this.tablePartners.splice(partnerIndex, 1, this.convertToPartnerTable(response));
          }
        }
      })
    );
  }

  get partnerForms(): FormArray {
    return this.form.get('partners') as FormArray;
  }

  next() {
    this.partnerForms.clear();
    this.partners.forEach((partner, i) => this.partnerForms.push(new FormControl(partner)));
    this.partnerForms.markAllAsTouched();
    if (this.partnerForms.valid) {
      this.formService.save();
      this.router.navigate(['../../../account-list'], { relativeTo: this.route });
    }
  }

  get account(): FormGroup {
    return this.partnerForms.controls['account'];
  }

  back() {
    this.router.navigate(['../role'], { relativeTo: this.route });
  }

  get noPartner() {
    return this.tablePartners.length === 0 && this.partnerForms.touched;
  }

  private convertToForm(parterDetais: PartnerDetails): PartnerForm {
    return { ...parterDetais, isActive: parterDetais.role.isActive };
  }

  private convertToPartnerDetails(form: PartnerForm): PartnerDetails {
    return { account: form.account, role: { ...form.role, isActive: form.isActive } };
  }

  private convertToPartnerTable(partner: any) {
    return { ...partner.role, companyName: partner.account.companyName };
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}

export interface PartnerForm {
  account: Account;
  role: Role;
  isActive: boolean;
}

export interface PartnerTable {
  companyName: string;
  name: string;
  isActive: boolean;
  type: RoleType;
  address: string;
}
