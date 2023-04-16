import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "app/@core/services/auth.service";
import { DateUtils } from "app/@shared/utils/date-utils";
import { APIService } from "app/API.service";
import { saveAs } from "file-saver";
import * as moment from "moment";
import { MessageService } from "primeng/api";
import { Subscription } from "rxjs";

@Component({
  selector: "app-screening-report",
  templateUrl: "./screening-report.component.html",
  styleUrls: ["./screening-report.component.scss"],
})
export class ScreeningReportComponent implements OnInit, OnDestroy {
  user;
  form: FormGroup;
  filterForm: FormGroup;
  subscriptions: Subscription[] = [];
  loading = false;
  screenings;
  filteredScreenings;
  projects;
  positiveNum = 0;
  negativeNum = 0;
  notTestedNum = 0;
  projectCode;
  result = {
    value: "",
  };
  cols = [
    { field: "method", header: "Method" },
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
  methods = [
    { label: "All", value: "All" },
    { label: "PCR", value: "PCR" },
    { label: "RAT", value: "RAT" },
  ];
  results = [
    { label: "All", value: "All" },
    { label: "Positive", value: "Positive" },
    { label: "Negative", value: "Negative" },
    { label: "Not Tested", value: "Not Tested" },
  ];
  constructor(
    private api: APIService,
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    const start = moment().startOf("day");
    const end = moment().startOf("day");
    this.form = this.fb.group({
      startDate: [DateUtils.format(start), Validators.required],
      endDate: [DateUtils.format(end), Validators.required],
      crewName: [null],

      projectCode: [null, Validators.required],
    });
    this.initFilterForm();
  }

  private initFilterForm() {
    this.filterForm = this.fb.group({
      method: ["All"],
      result: ["All"],
    });

    this.subscriptions.push(
      this.filterForm.valueChanges.subscribe((value) => {
        this.filterScreening(value["method"], value["result"]);
      })
    );
  }

  async ngOnInit() {}

  public async fetch() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.initFilterForm();
      this.positiveNum = 0;
      this.negativeNum = 0;
      this.notTestedNum = 0;
      this.loading = true;
      const {
        startDate,
        endDate,
        projectCode,
        crewName,
      } = this.form.getRawValue();
      this.projectCode = projectCode;
      const startDateObj = this.getDateMoment(startDate).startOf("day");
      const endDateObj = this.getDateMoment(endDate).endOf("day").add(6, "h");
      const search = {
        processedAt: { between: [startDateObj, endDateObj] },
        processed: { eq: true },
        jobCode: { eq: projectCode.toUpperCase() },
      } as any;
      if (crewName) {
        search.crewName = { eq: crewName };
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
        if (i.result === "Not Tested") {
          this.notTestedNum++;
        }
        return i;
      });
      this.filteredScreenings = [...this.screenings];
      this.loading = false;
    }
  }

  public get hasRecord() {
    return !!this.screenings;
  }

  public get total() {
    return this.hasRecord ? this.screenings.length : 0;
  }

  public isProjectFormInvalid(controlName: string) {
    return (
      this.form.controls[controlName].invalid &&
      (this.form.controls[controlName].dirty ||
        this.form.controls[controlName].touched)
    );
  }
  public filterScreening(methodValue, resultValue) {
    if (this.screenings) {
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
  }

  private getDateMoment(dateStr) {
    const date = new Date(dateStr);
    const moment1 = moment(date);
    return moment1;
  }

  public async duplicate(rowData) {
    const sceeningObj = await this.api.CreateSceening({
      jobId: rowData.jobId,
      jobName: rowData.jobName,
      crewId: rowData.crewId,
      crewName: rowData.crewName,
      crewPhoneNumber: rowData.crewPhoneNumber,
      submittedAt: moment(rowData.submittedAt, "MM/DD/YYYY HH:mm:ss")
        .toDate()
        .toISOString(),
      location: rowData.location,
    });

    const answeredQuestionArray = rowData.answeredQuestions.items.map((aq) =>
      this.api.CreateAnsweredQuestion({
        sceeningAnsweredQuestionsId: sceeningObj.id,
        question: aq.question,
        answer: aq.answer,
        order: aq.order,
      })
    );
    await Promise.all(answeredQuestionArray);
    this.messageService.add({
      key: "tst",
      severity: "success",
      summary: "Success",
      detail: "The record has been duplicated.",
    });
  }

  public export() {
    const header = this.cols.map((c) => c.header);
    let csv = this.filteredScreenings.map((row) =>
      this.cols
        .map((c) => JSON.stringify(row[c.field], DateUtils.replacer))
        .join(",")
    );
    csv.unshift(header.join(","));
    let csvArray = csv.join("\r\n");

    var blob = new Blob([csvArray], { type: "text/csv" });
    saveAs(blob, `report-${this.projectCode}.csv`);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
