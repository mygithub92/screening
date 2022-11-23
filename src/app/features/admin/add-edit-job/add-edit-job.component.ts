import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'app/API.service';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: "app-add-edit-job",
  templateUrl: "./add-edit-job.component.html",
  styleUrls: ["./add-edit-job.component.scss"],
})
export class AddEditJobComponent implements OnInit {
  actionsSubscription: Subscription;
  form: FormGroup;
  questionForms = [];
  loading = true;
  jobId;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: APIService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      code: [null, Validators.required],
      questForm: [null, Validators.required],
    });
    this.actionsSubscription = route.params
      .pipe(take(1))
      .subscribe((params) => {
        console.log(params);
        this.jobId = params.id;
        if (params.id === "-1") {
          this.loading = false;
        } else {
          this.getJob(params.id);
        }
      });
  }

  async ngOnInit() {
    const forms = await this.api.ListForms();
    this.loading = false;
    forms.items.forEach((f) =>
      this.questionForms.push({ label: f.name, value: f.id })
    );
  }

  async getJob(id) {
    const jobOjb = await this.api.GetJob(id);
    this.loading = false;
    console.log(jobOjb);
    this.form.patchValue(jobOjb);
  }
  public isInvalid(controlName: string) {
    return (
      this.form.controls[controlName].invalid &&
      (this.form.controls[controlName].dirty ||
        this.form.controls[controlName].touched)
    );
  }

  async save() {
    const values = this.form.getRawValue();
    const job = await this.api.CreateJob({ code: values.code });
    const jobForm = await this.api.CreateFormJob({
      formId: values.questForm,
      jobId: job.id,
    });
    console.log(jobForm);
  }
}
