import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DateUtils } from 'app/@shared/utils/date-utils';
import { APIService } from 'app/API.service';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: "app-add-edit-job",
  templateUrl: "./add-edit-job.component.html",
  styleUrls: ["./add-edit-job.component.scss"],
})
export class AddEditJobComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  form: FormGroup;
  questionForms = [];
  jobCodeDuplicated = false;
  loading = true;
  jobId;
  jobOjb;
  header = "Edit Project";
  formId;
  isAddition = false;
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
    private api: APIService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      location: [null, Validators.required], //location is project code
      code: [null, Validators.required], //code is project name
      questionForm: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
    });
    this.subscriptions.push(
      this.form.controls["location"].valueChanges.subscribe(
        () => (this.jobCodeDuplicated = false)
      )
    );
    this.subscriptions.push(
      route.params.pipe(take(1)).subscribe(async (params) => {
        this.reset();
        this.jobId = params.id;
        const forms = await this.api.ListForms();
        forms.items.forEach((f) =>
          this.questionForms.push({ label: f.name, value: f.id })
        );
        if (params.id === "-1") {
          this.isAddition = true;
          this.header = "Add Project";
          this.loading = false;
          this.form.controls["questionForm"].setValue(
            this.questionForms[0].value
          );
        } else {
          this.isAddition = false;
          this.getJob(params.id);
        }
      })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  private reset() {
    this.jobId = null;
    this.loading = true;
    this.formId = null;
  }

  async ngOnInit() {}

  async getJob(id) {
    this.jobOjb = await this.api.GetJob(id);
    this.formId =
      this.jobOjb.forms.items[0] && this.jobOjb.forms.items[0].formId;

    const formValues = {
      location: this.jobOjb.location,
      code: this.jobOjb.code,
      questionForm: this.formId,
      startDate: DateUtils.format(this.jobOjb.startDate),
      endDate: DateUtils.format(this.jobOjb.endDate),
    };
    this.form.patchValue(formValues);
    this.loading = false;
  }

  public isInvalid(controlName: string) {
    return (
      this.form.controls[controlName].invalid &&
      this.form.controls[controlName].errors?.["required"] &&
      (this.form.controls[controlName].dirty ||
        this.form.controls[controlName].touched)
    );
  }

  public get not4() {
    if (!this.isAddition) {
      return false;
    }
    const projectCodeFormControl = this.form.controls["location"];
    return (
      projectCodeFormControl.invalid &&
      (projectCodeFormControl.errors?.["minlength"] ||
        projectCodeFormControl.errors?.["maxlength"]) &&
      (projectCodeFormControl.dirty || projectCodeFormControl.touched)
    );
  }

  private async checkDuplicate(jobCode: string) {
    const jobsObj = await this.api.ListJobs();
    const projectCodes = jobsObj.items.map((job) => job.location);
    this.jobCodeDuplicated = projectCodes.includes(jobCode);
  }

  async save() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const values = this.form.getRawValue();

      this.loading = true;
      if (this.isAddition) {
        await this.checkDuplicate(values.location);
        if (!this.jobCodeDuplicated) {
          const job = await this.api.CreateJob({
            code: values.code,
            location: values.location.toUpperCase(),
            startDate: this.getDateString(values.startDate),
            endDate: this.getDateString(values.endDate),
          });
          await this.api.CreateFormJob({
            formId: values.questionForm,
            jobId: job.id,
          });
          this.router.navigate(["../../jobs"], {
            relativeTo: this.route,
          });
        }
      } else {
        const formJob = await this.api.ListFormJobs({
          and: [{ jobId: { eq: this.jobId } }, { formId: { eq: this.formId } }],
        });
        const job = await this.api.UpdateJob({
          id: this.jobId,
          code: values.code,
          _version: this.jobOjb._version,
          startDate: this.getDateString(values.startDate),
          endDate: this.getDateString(values.endDate),
        });
        await this.api.UpdateFormJob({
          id: formJob.items[0].id,
          _version: formJob.items[0]._version,
          formId: values.questionForm,
          jobId: job.id,
        });
        this.router.navigate(["../../jobs"], {
          relativeTo: this.route,
        });
      }
    }
  }

  public cancel() {
    this.router.navigate(["../../jobs"], { relativeTo: this.route });
  }

  private getDateString(dateStr) {
    const date = new Date(dateStr);
    const moment1 = moment(date);
    return moment1.toISOString();
  }
}
