import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'tt-transfer-dialog',
  templateUrl: './transfer-dialog.component.html',
  styleUrls: ['./transfer-dialog.component.scss']
})
export class TransferDialogComponent implements OnInit {
  form: FormGroup;
  partners: any[];
  constructor(private fb: FormBuilder, public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.form = this.fb.group({
      transferDate: [null, [Validators.required]],
      transferTo: [null, [Validators.required]]
    });
    this.partners = config.data.partners;
  }

  ngOnInit(): void {}

  save() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.ref.close(this.form.value);
    }
  }

  cancel() {
    this.ref.close(null);
  }
}
