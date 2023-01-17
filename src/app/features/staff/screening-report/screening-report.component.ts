import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/@core/services/auth.service';
import { DateUtils } from 'app/@shared/utils/date-utils';
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
  filterForm: FormGroup;
  loading = true;
  screenings;
  filteredScreenings;
  filteredProjects = [];
  projects;
  positiveNum = 0;
  negativeNum = 0;

  result = {
    value: "",
  };
  cols = [
    { field: "method", header: "Method" },
    { field: "result", header: "Result" },
    { field: "crewName", header: "Crew Name" },
    { field: "jobName", header: "Project Name" },
    { field: "location", header: "Location" },
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
    private authService: AuthService
  ) {
    const tomorrow = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 7);
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.form = this.fb.group({
      startDate: [DateUtils.format(yesterday), Validators.required],
      endDate: [DateUtils.format(tomorrow), Validators.required],
      project: [null],
    });
    this.filterForm = this.fb.group({
      method: ["All"],
      result: ["All"],
    });
    this.filterForm.valueChanges.subscribe((value) => {
      console.log(value);
      this.filterScreening(value["method"], value["result"]);
    });
  }

  async ngOnInit() {
    this.authService
      .getCurrentAuthenticatedUser()
      .subscribe(async (user: any) => {
        console.log(user);
        this.user = user;
        this.projects = (await this.api.ListJobs()).items;

        this.fetch();
      });
  }

  public async fetch() {
    this.loading = true;
    const { startDate, endDate, project } = this.form.getRawValue();
    const startDateObj = this.getDateString(startDate);
    const endDateObj = this.getDateString(endDate);
    const search = {
      submittedAt: { between: [startDateObj, endDateObj] },
      processed: { eq: true },
    } as any;
    if (project) {
      search.jobId = { eq: project.id };
    }
    const screeningObjs = await this.api.ListSceenings(search);
    this.screenings = screeningObjs.items.map((i) => {
      i.processedAt = DateUtils.formatDateTime(i.processedAt);
      i.submittedAt = DateUtils.formatDateTime(i.submittedAt);
      i.answeredQuestions.items.sort((a, b) => a.order - b.order);

      if (i.result === "Positive") {
        this.positiveNum++;
      }
      if (i.result === "Negative") {
        this.negativeNum++;
      }
      return i;
    });
    this.filteredScreenings = [...this.screenings];
    this.loading = false;
  }

  public get report() {
    const total = this.screenings.length;
    return `Postive: ${this.positiveNum}/${total}; Negative: ${this.negativeNum}/${total}`;
  }

  public filterProject(event) {
    this.filteredProjects = [];
    const query = event.query;
    for (const item of this.projects) {
      const job = item;
      if (job.code.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        this.filteredProjects.push(job);
      }
    }
  }

  public filterScreening(methodValue, resultValue) {
    this.filteredScreenings = [];
    if (methodValue === "All" && resultValue === "All") {
      this.filteredScreenings = [...this.screenings];
    } else {
      this.filteredScreenings = this.screenings.filter(
        (s) =>
          (methodValue === "All" || methodValue === s["method"]) &&
          (resultValue === "All" || resultValue === s["result"])
      );
    }
  }

  private getDateString(dateStr) {
    const date = new Date(dateStr);
    const moment1 = moment(date);
    return moment1.toISOString();
  }

  public filter(column, value) {
    console.log(column);
    console.log(value);
  }
}
