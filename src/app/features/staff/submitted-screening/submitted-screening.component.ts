import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/@core/services/auth.service';
import { DateUtils } from 'app/@shared/utils/date-utils';
import { APIService } from 'app/API.service';
import * as moment from 'moment';
import { MessageService } from 'primeng/api';

import { TextMessageService } from '../text-message-service';

@Component({
  selector: "app-submitted-screening",
  templateUrl: "./submitted-screening.component.html",
  styleUrls: ["./submitted-screening.component.scss"],
  providers: [TextMessageService],
})
export class SubmittedScreeningComponent implements OnInit {
  user;
  form: FormGroup;
  resultForm: FormGroup;
  loading = false;
  screenings;
  projects;
  projectCodeIdMap = {};
  result = {
    value: "",
  };
  screeningCrewMap = {};
  cols = [
    { field: "crewName", header: "Crew Name" },
    { field: "jobName", header: "Project Name" },
    { field: "location", header: "Location" },
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
    private textMessageService: TextMessageService,
    private messagetService: MessageService
  ) {
    const start = moment().startOf("day");
    const end = moment().startOf("day");
    this.form = this.fb.group({
      startDate: [DateUtils.format(start), Validators.required],
      endDate: [DateUtils.format(end), Validators.required],
      crewName: [null],
      projectCode: [null, Validators.required],
    });
    this.resultForm = this.fb.group({});
  }

  async ngOnInit() {
    this.authService
      .getCurrentAuthenticatedUser()
      .subscribe(async (user: any) => {
        this.user = user;
        this.projects = (await this.api.ListJobs()).items;
        this.projectCodeIdMap = this.projects.reduce((a, c) => {
          a[c.location] = c.id;
          return a;
        }, {});
      });
  }

  public async fetch() {
    this.screenings = [];
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.loading = true;
      this.screeningCrewMap = {};
      this.resultForm.reset();
      const {
        startDate,
        endDate,
        projectCode,
        crewName,
      } = this.form.getRawValue();
      const startDateObj = this.getDateMoment(startDate).startOf("day");
      const endDateObj = this.getDateMoment(endDate).endOf("day").add(6, "h");
      const search = {
        submittedAt: {
          between: [startDateObj, endDateObj],
        },
        not: { processed: { eq: true } },
      } as any;
      search.jobId = { eq: this.projectCodeIdMap[projectCode] };
      if (crewName) {
        search.crewName = { eq: crewName };
      }
      const screeningObjs = await this.api.ListSceenings(search);
      this.screenings = screeningObjs.items;
      this.screenings.forEach((screening, i) => {
        this.screeningCrewMap[screening.id] = {
          crewName: screening.crewName,
          crewPhoneNumber: screening.crewPhoneNumber,
        };
        screening.submittedAt = DateUtils.formatDateTime(screening.submittedAt);
        screening.answeredQuestions.items.sort((a, b) => a.order - b.order);
        this.resultForm.addControl(
          `method${screening.id}`,
          new FormControl(null)
        );
        this.resultForm.addControl(
          `result${screening.id}`,
          new FormControl(null)
        );
      });
      this.loading = false;
    }
  }

  private getDateMoment(dateStr) {
    const date = new Date(dateStr);
    const moment1 = moment(date);
    return moment1;
  }

  public isInvalid(index: number) {
    const questionForm = this.resultForm.controls;
    const controlName = `screening${index + 1}`;
    return (
      questionForm[controlName].invalid &&
      (questionForm[controlName].dirty || questionForm[controlName].touched)
    );
  }

  async remind(rawData) {
    const { crewName, crewPhoneNumber } = this.screeningCrewMap[rawData.id];
    const message = [
      {
        type: "reminder",
        name: crewName,
        phonne: crewPhoneNumber,
      },
    ];
    const result = await this.textMessageService.sendMessage(message);
    this.messagetService.add({
      key: "tst",
      severity: "success",
      summary: "Success",
      detail: "Reminder sent.",
    });
  }
  public isProjectFormInvalid(controlName: string) {
    return (
      this.form.controls[controlName].invalid &&
      (this.form.controls[controlName].dirty ||
        this.form.controls[controlName].touched)
    );
  }
  public async submit() {
    const updateSceenings = [];
    const SMSs = [];
    this.loading = true;
    this.screenings.forEach((screening) => {
      const method = this.resultForm.controls[`method${screening.id}`].value;
      const result = this.resultForm.controls[`result${screening.id}`].value;
      const noTest = result === "Not Tested";
      if ((method && result) || noTest) {
        const { crewName, crewPhoneNumber } = this.screeningCrewMap[
          screening.id
        ];
        if (!noTest) {
          SMSs.push({
            type: "result",
            name: crewName,
            phonne: crewPhoneNumber,
            test: {
              result,
              method,
            },
          });
        }

        updateSceenings.push(
          this.api.UpdateSceening({
            id: screening.id,
            result,
            method,
            processed: true,
            processedAt: new Date().toISOString(),
            staffId: this.user.username,
            staffName: this.user.attributes.name,
          })
        );
      }
    });
    await Promise.all(updateSceenings);
    await this.textMessageService.sendMessage(SMSs);
    await this.fetch();
    this.loading = false;
  }
}
