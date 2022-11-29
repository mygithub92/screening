import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/@core/services/auth.service';
import { APIService } from 'app/API.service';

@Component({
  selector: "app-screening-form",
  templateUrl: "./screening-form.component.html",
  styleUrls: ["./screening-form.component.scss"],
})
export class ScreeningFormComponent implements OnInit {
  form: FormGroup;
  jobs = [];
  selectedJob;
  questions;
  constructor(
    private api: APIService,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      selectedJob: [null, Validators.required],
      jobCode: [null, Validators.required],
    });

    this.form.controls["selectedJob"].valueChanges.subscribe((value) => {
      this.selectedJob = value;
      this.getJobForm(this.selectedJob);
    });
  }

  ngOnInit(): void {
    this.authService.getCurrentAuthenticatedUser().subscribe(async (user) => {
      const userName = user.signInUserSession.accessToken.payload["username"];
      const crew = await this.api.ListCrews({ userName: { eq: userName } });
      const crewId = crew.items[0].id;
      this.selectedJob = crew.items[0].defaultJobId;
      const jobCrews = await this.api.ListCrewJobs({
        crewId: { eq: crewId },
      });
      const jobs = [];
      jobCrews.items.forEach((jobCrew) =>
        jobs.push({ label: jobCrew.job.code, value: jobCrew.job.id })
      );
      this.jobs = jobs;
      this.form.patchValue({ selectedJob: this.selectedJob });
    });
    this.api.ListCrewJobs();
  }

  private async getJobForm(jobId) {
    const forms = await this.api.ListFormJobs({ jobId: { eq: jobId } });
    const formId = forms.items[0].form.id;
    const form = await this.api.GetForm(formId);
    console.log(forms);
    console.log(form);
  }

  public isInvalid(controlName: string) {
    return (
      this.form.controls[controlName].invalid &&
      (this.form.controls[controlName].dirty ||
        this.form.controls[controlName].touched)
    );
  }
}
