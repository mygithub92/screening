import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Role, RoleType } from 'app/@shared/api-interfaces';
import { DialogService } from 'primeng/dynamicdialog';

import * as fromAdmin from '../../state/reducers';
import { FormService } from '../services/form.service';
import { RoleDialogComponent } from './role-dialog/role-dialog.component';

@Component({
  selector: 'tt-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit, OnDestroy {
  form: FormGroup;
  roleTypes: RoleType[];
  subcriptions = [];
  cols = [];
  title = 'Add Role';

  constructor(
    private formService: FormService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromAdmin.State>,
    public dialogService: DialogService,
    private fb: FormBuilder
  ) {
    this.form = this.formService.form;
    if (this.formService.isEdit) {
      this.title = 'Edit Role';
    }
    this.subcriptions.push(this.store.pipe(select(fromAdmin.selectRoleTypes)).subscribe((roleTypes) => (this.roleTypes = roleTypes)));
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'name', header: 'Role Name' },
      { field: 'location', header: 'Location' },
      { field: 'type', header: 'Role Type' },
      { field: 'isActive', header: 'Status' },
    ];
  }

  next() {
    this.roleForms.markAllAsTouched();
    if (this.roleForms.valid) {
      this.router.navigate(['../partner'], { relativeTo: this.route });
    }
  }

  back() {
    this.router.navigate(['../company'], { relativeTo: this.route });
  }

  show(roleIndex: number) {
    const ref = this.dialogService.open(RoleDialogComponent, {
      data: {
        roleTypes: this.roleTypes,
        roleForm: this.getRoleFormGroup(roleIndex),
      },
      header: roleIndex < 0 ? 'Add Role' : 'Edit Role',
      closable: false,
      width: '50%',
    });

    this.subcriptions.push(
      ref.onClose.subscribe((roleForm: FormGroup) => {
        if (roleForm) {
          if (roleIndex === -1) {
            this.roleForms.push(roleForm);
          } else {
            this.roleForms.setControl(roleIndex, roleForm);
          }
        }
      })
    );
  }

  getRoleFormGroup(index: number): FormGroup {
    const roleFormGroup = this.fb.group({
      id: [null],
      name: [null, [Validators.required]],
      location: [null, [Validators.required]],
      type: [null, [Validators.required]],
      isActive: [null, [Validators.required]],
    });
    if (index > -1) {
      roleFormGroup.patchValue(this.roleForms.at(index).value);
    }
    return roleFormGroup;
  }

  get roleForms(): FormArray {
    return this.form.get('roles') as FormArray;
  }

  get roles(): Role[] {
    return this.roleForms.value;
  }

  ngOnDestroy(): void {
    this.subcriptions.forEach((sub) => sub.unsubscribe());
  }

  get noRole() {
    return this.roles.length === 0 && this.roleForms.touched;
  }
}
