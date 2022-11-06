import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FormService } from '../services/form.service';

@Component({
  selector: 'tt-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  form: FormGroup;
  title = 'Add Company';
  types = [
    { label: 'Primary', value: 1 },
    { label: 'Secondary', value: 2 },
  ];
  statuses = [
    { label: 'Active', value: true },
    { label: 'Inactive', value: false },
  ];

  constructor(private formService: FormService, private router: Router, private route: ActivatedRoute) {
    this.form = this.formService.form;
    if (this.formService.isEdit) {
      this.title = 'Edit Company';
    }
  }

  ngOnInit(): void {}

  next() {
    if (!this.invalidForm()) {
      this.router.navigate(['../role'], { relativeTo: this.route });
    }
  }

  private invalidForm() {
    const fieldNames = ['companyName', 'email', 'isActive', 'accountType', 'address'];
    fieldNames.forEach((name) => this.form.controls[name].markAllAsTouched());
    return fieldNames.some((name) => this.form.controls[name].invalid);
  }
}
