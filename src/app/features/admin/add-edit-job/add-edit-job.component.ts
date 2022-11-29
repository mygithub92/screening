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
  crews = [];
  loading = true;
  jobId;
  formId;
  currentSelectedCrew = [];
  currentSelectedCrewMap;
  selectedCrew = [];
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
      code: [null, Validators.required],
      questionForm: [null, Validators.required],
    });
    this.actionsSubscription = route.params
      .pipe(take(1))
      .subscribe(async (params) => {
        this.reset();
        console.log(params);
        this.jobId = params.id;
        const forms = await this.api.ListForms();
        const crewObjs = await this.api.ListCrews();
        console.log(crewObjs);
        this.loading = false;
        forms.items.forEach((f) =>
          this.questionForms.push({ label: f.name, value: f.id })
        );
        console.log(this.questionForms);
        const localCrews = [];
        crewObjs.items.forEach((i) => {
          localCrews.push({
            data: {
              ...i,
            },
          });
        });
        this.crews = localCrews;
        console.log(this.crews);
        if (params.id === "-1") {
          this.loading = false;
        } else {
          this.getJob(params.id);
        }
      });
  }

  private reset() {
    this.jobId = null;
    this.loading = true;
    this.crews = [];
    this.formId = null;
    this.currentSelectedCrew = [];
  }

  async ngOnInit() {}

  public get isAddition() {
    return this.jobId === "-1";
  }

  async getJob(id) {
    const jobOjb = await this.api.GetJob(id);
    console.log(jobOjb);
    this.formId = jobOjb.forms.items[0].formId;
    const jobCrew = await this.api.ListCrewJobs({ jobId: { eq: id } });
    this.currentSelectedCrewMap = {};
    jobCrew.items.forEach((jc) => {
      this.currentSelectedCrew.push(jc.crewId);
      this.currentSelectedCrewMap[jc.crewId] = jc.id;
    });
    console.log(this.currentSelectedCrew);
    console.log(this.currentSelectedCrewMap);

    const selectedCrew = [];
    this.crews.forEach((crew) => {
      if (this.currentSelectedCrew.includes(crew.data.id)) {
        selectedCrew.push(crew);
      }
    });

    this.selectedCrew = selectedCrew;

    const formValues = { code: jobOjb.code, questionForm: this.formId };
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

  async save() {
    console.log(this.selectedCrew);
    const values = this.form.getRawValue();
    if (this.isAddition) {
      const job = await this.api.CreateJob({ code: values.code });
      const jobForm = await this.api.CreateFormJob({
        formId: values.questionForm,
        jobId: job.id,
      });

      const jobCrew = [];
      this.selectedCrew.forEach((c) =>
        jobCrew.push(
          this.api.CreateCrewJob({
            jobId: job.id,
            crewId: c.data.id,
          })
        )
      );
      const t = await Promise.all(jobCrew);

      console.log(job);
      console.log(jobForm);
      console.log(t);
    } else {
      const formJob = await this.api.ListFormJobs({
        and: [{ jobId: { eq: this.jobId } }, { formId: { eq: this.formId } }],
      });
      const job = await this.api.UpdateJob({
        id: this.jobId,
        code: values.code,
      });
      const jobForm = await this.api.UpdateFormJob({
        id: formJob.items[0].id,
        formId: values.questionForm,
        jobId: job.id,
      });

      const deleteCrew = this.currentSelectedCrew.filter(
        (c) => !this.selectedCrew.some(({ data: d }) => c === d.id)
      );
      const createCrew = this.selectedCrew.filter(
        ({ data: d }) => !this.currentSelectedCrew.some((c) => c === d.id)
      );

      const jobCrew = [];
      deleteCrew.forEach((id) =>
        jobCrew.push(
          this.api.DeleteCrewJob({
            id: this.currentSelectedCrewMap[id],
          })
        )
      );
      createCrew.forEach((c) =>
        jobCrew.push(
          this.api.CreateCrewJob({
            jobId: job.id,
            crewId: c.data.id,
          })
        )
      );
      const t = await Promise.all(jobCrew);

      console.log(job);
      console.log(jobForm);
      console.log(t);
    }
  }
}
