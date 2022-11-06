import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from 'app/features/admin/add-edit-account/services/form.service';

@Component({
  selector: 'tt-grower',
  templateUrl: './grower.component.html',
  styleUrls: ['./grower.component.scss']
})
export class GrowerComponent implements OnInit {
  form: FormGroup;

  @Input() formService: FormService;
  constructor() {}

  ngOnInit(): void {
    this.form = this.formService.form;
  }
}
