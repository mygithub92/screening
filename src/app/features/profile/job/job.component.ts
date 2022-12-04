import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/@core/services/auth.service';
import { APIService } from 'app/API.service';

@Component({
  selector: "app-job",
  templateUrl: "./job.component.html",
  styleUrls: ["./job.component.scss"],
})
export class JobComponent implements OnInit {
  form: FormGroup;
  jobs;
  crewId;
  currentDefaultJobName;

  filteredJobs = [];
  loading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: APIService,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      jobCode: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.authService.getCurrentAuthenticatedUser().subscribe(async (user) => {
      const userName = user.signInUserSession.accessToken.payload["username"];
      const crew = await this.api.ListCrews({ userName: { eq: userName } });
      this.crewId = crew.items[0].id;
      const jobs = await this.api.ListJobs();
      console.log(jobs);
      this.jobs = jobs.items;
      const currentDefaultJobId = crew.items[0].defaultJobId;
      this.setCurrentProjectName(currentDefaultJobId);
      this.form.patchValue({ jobCode: currentDefaultJobId });
      this.loading = false;
    });
  }

  private setCurrentProjectName(currentDefaultJobId) {
    const currentDefaultJob = this.jobs.find(
      (job) => job.id === currentDefaultJobId
    );
    if (currentDefaultJob) {
      this.currentDefaultJobName = currentDefaultJob.code;
    }
  }

  public isInvalid(controlName: string) {
    return (
      this.form.controls[controlName].invalid &&
      (this.form.controls[controlName].dirty ||
        this.form.controls[controlName].touched)
    );
  }

  public async save() {
    const values = this.form.getRawValue();
    const result = await this.api.UpdateCrew({
      id: this.crewId,
      defaultJobId: values.jobCode.id,
    });
    this.setCurrentProjectName(values.jobCode.id);
    console.log(result);
  }

  public filterJob(event) {
    this.filteredJobs = [];
    const query = event.query;
    for (const item of this.jobs) {
      const job = item;
      if (job.code.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        this.filteredJobs.push(job);
      }
    }
  }
}
