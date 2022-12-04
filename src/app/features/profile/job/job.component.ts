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
  radioValue: string;
  jobs;
  crewId;

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
      const jobs = await this.api.ListCrewJobs({
        crewId: { eq: this.crewId },
      });
      console.log(jobs);
      this.jobs = jobs.items;
      this.form.patchValue({ jobCode: crew.items[0].defaultJobId });
    });
    this.api.ListCrewJobs();
  }

  public isInvalid(controlName: string) {
    return (
      this.form.controls[controlName].invalid &&
      (this.form.controls[controlName].dirty ||
        this.form.controls[controlName].touched)
    );
  }

  public save() {
    const values = this.form.getRawValue();
    this.api.UpdateCrew({ id: this.crewId, defaultJobId: values.jobCode });
  }
}
