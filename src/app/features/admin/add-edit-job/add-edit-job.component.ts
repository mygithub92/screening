import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'app/API.service';
import * as moment from 'moment';
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
  header = "Edit Project";
  formId;
  cols = [
    { field: "name", header: "Name" },
    { field: "phonenumber", header: "Phone number" },
    { field: "email", header: "Email" },
    { field: "address", header: "Address" },
    { field: "companyName", header: "Company name" },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private api: APIService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      code: [null, Validators.required],
      questionForm: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
    });
    this.actionsSubscription = route.params
      .pipe(take(1))
      .subscribe(async (params) => {
        this.reset();
        console.log(params);
        this.jobId = params.id;
        const forms = await this.api.ListForms();
        forms.items.forEach((f) =>
          this.questionForms.push({ label: f.name, value: f.id })
        );
        if (params.id === "-1") {
          this.header = "Add Project";
          this.loading = false;
          this.form.controls["questionForm"].setValue(
            this.questionForms[0].value
          );
        } else {
          this.getJob(params.id);
        }
      });
  }

  private reset() {
    this.jobId = null;
    this.loading = true;
    this.formId = null;
  }

  async ngOnInit() {}

  public get isAddition() {
    return this.jobId === "-1";
  }

  async getJob(id) {
    const jobOjb = await this.api.GetJob(id);
    console.log(jobOjb);
    this.formId = jobOjb.forms.items[0] && jobOjb.forms.items[0].formId;

    const formValues = {
      code: jobOjb.code,
      questionForm: this.formId,
      startDate: this.transformDate(jobOjb.startDate),
      endDate: this.transformDate(jobOjb.endDate),
    };
    this.form.patchValue(formValues);
    this.loading = false;
  }
  public isInvalid(controlName: string) {
    return (
      this.form.controls[controlName].invalid &&
      (this.form.controls[controlName].dirty ||
        this.form.controls[controlName].touched)
    );
  }

  private transformDate(date) {
    return this.datePipe.transform(date, "shortDate");
  }

  async save() {
    this.loading = true;
    const values = this.form.getRawValue();
    let detail;
    if (this.isAddition) {
      const job = await this.api.CreateJob({
        code: values.code,
        startDate: this.getDateString(values.startDate),
        endDate: this.getDateString(values.endDate),
      });
      const jobForm = await this.api.CreateFormJob({
        formId: values.questionForm,
        jobId: job.id,
      });

      console.log(job);
      console.log(jobForm);
      detail = "Project added";
    } else {
      const formJob = await this.api.ListFormJobs({
        and: [{ jobId: { eq: this.jobId } }, { formId: { eq: this.formId } }],
      });
      const job = await this.api.UpdateJob({
        id: this.jobId,
        code: values.code,
        startDate: this.getDateString(values.startDate),
        endDate: this.getDateString(values.endDate),
      });
      const jobForm = await this.api.UpdateFormJob({
        id: formJob.items[0].id,
        formId: values.questionForm,
        jobId: job.id,
      });

      console.log(job);
      console.log(jobForm);
      detail = "Project updated";
    }
    this.router.navigate(["../../jobs"], { relativeTo: this.route });
  }

  private getDateString(dateStr) {
    const date = new Date(dateStr);
    const moment1 = moment(date);
    return moment1.toISOString();
  }
}
