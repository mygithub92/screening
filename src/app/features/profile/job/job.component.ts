import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/@core/services/auth.service';
import { APIService } from 'app/API.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: "app-job",
  templateUrl: "./job.component.html",
  styleUrls: ["./job.component.scss"],
})
export class JobComponent implements OnInit {
  form: FormGroup;
  crewId;
  jobCode;

  filteredJobs = [];
  loading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: APIService,
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService
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
      this.jobCode = crew.items[0].defaultJobId;
      this.loading = false;
    });
  }

  public isInvalid(controlName: string) {
    return (
      this.form.controls[controlName].invalid &&
      (this.form.controls[controlName].dirty ||
        this.form.controls[controlName].touched)
    );
  }

  public async save() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const values = this.form.getRawValue();
      const result = await this.api.UpdateCrew({
        id: this.crewId,
        defaultJobId: values.jobCode,
      });
      this.messageService.add({
        key: "tst",
        severity: "success",
        summary: "Success",
        detail: "Default Project changed",
      });
    }
  }
}
