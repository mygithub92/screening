import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from 'app/features/admin/add-edit-account/services/form.service';

@Component({
  selector: 'tt-winery',
  templateUrl: './winery.component.html',
  styleUrls: ['./winery.component.scss'],
})
export class WineryComponent implements OnInit {
  form: FormGroup;

  @Input() formService: FormService;
  constructor() {}

  ngOnInit(): void {
    this.form = this.formService.form;
  }
}
