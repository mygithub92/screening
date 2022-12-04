import { DatePipe } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/@core/services/auth.service';
import { APIService } from 'app/API.service';
import * as moment from 'moment';

@Component({
  selector: "app-screening-report",
  templateUrl: "./screening-report.component.html",
  styleUrls: ["./screening-report.component.scss"],
})
export class ScreeningReportComponent implements OnInit {
  user;
  form: FormGroup;
  loading = true;
  screenings;
  result = {
    value: "",
  };
  cols = [
    { field: "result", header: "Result" },
    { field: "crewName", header: "Crew Name" },
    { field: "jobName", header: "Project Name" },
    { field: "processedAt", header: "Processed" },
    { field: "submittedAt", header: "Submitted" },
  ];
  subCols = [
    { field: "answer", header: "Answer" },
    { field: "question", header: "Question" },
  ];
  constructor(
    private api: APIService,
    private fb: FormBuilder,
    private authService: AuthService,
    private datePipe: DatePipe,
    @Inject(LOCALE_ID) public locale: string
  ) {
    const tomorrow = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 2);
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.form = this.fb.group({
      startDate: [this.transformDate(yesterday), Validators.required],
      endDate: [this.transformDate(tomorrow), Validators.required],
    });
  }

  async ngOnInit() {
    this.authService
      .getCurrentAuthenticatedUser()
      .subscribe(async (user: any) => {
        console.log(user);
        this.user = user;
        this.fetch();
      });
  }

  private transformDate(date) {
    return this.datePipe.transform(date, "shortDate", this.locale);
  }

  public async fetch() {
    this.loading = true;
    const { startDate, endDate } = this.form.getRawValue();
    console.log(startDate);
    console.log(endDate);
    const startDateObj = this.getDateString(startDate);
    const endDateObj = this.getDateString(endDate);
    console.log(startDateObj);

    console.log(endDateObj);

    const screeningObjs = await this.api.ListSceenings({
      processedAt: { between: [startDateObj, endDateObj] },
      processed: { eq: true },
    });
    this.screenings = screeningObjs.items;
    console.log(this.screenings);
    this.loading = false;
  }

  private getDateString(dateStr) {
    const date = new Date(dateStr);
    const moment1 = moment(date);
    return moment1.toISOString();
  }
}
