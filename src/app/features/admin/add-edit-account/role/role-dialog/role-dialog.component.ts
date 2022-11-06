import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RoleType } from 'app/@shared/api-interfaces';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'tt-role-dialog',
  templateUrl: './role-dialog.component.html',
  styleUrls: ['./role-dialog.component.scss']
})
export class RoleDialogComponent implements OnInit {
  roleForm: FormGroup;
  roleTypes: RoleType[];
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {}

  ngOnInit(): void {
    this.roleForm = this.config.data.roleForm;
    this.roleTypes = this.config.data.roleTypes;
  }

  save() {
    this.roleForm.markAllAsTouched();
    if (this.roleForm.valid) {
      this.ref.close(this.roleForm);
    }
  }

  cancel() {
    this.ref.close(null);
  }
}
