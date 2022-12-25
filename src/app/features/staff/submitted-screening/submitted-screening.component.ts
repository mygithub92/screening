import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/@core/services/auth.service';
import { DateUtils } from 'app/@shared/utils/date-utils';
import { APIService } from 'app/API.service';
import * as moment from 'moment';

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
  loading = true;
  screenings;
  filteredProjects = [];
  projects;
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
    private messageService: TextMessageService
  ) {
    const tomorrow = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 2);
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.form = this.fb.group({
      startDate: [DateUtils.format(yesterday), Validators.required],
      endDate: [DateUtils.format(tomorrow), Validators.required],
      project: [null],
    });
    this.resultForm = this.fb.group({});
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
    this.screeningCrewMap = {};
    this.resultForm.reset();
    const { startDate, endDate, project } = this.form.getRawValue();
    const startDateObj = this.getDateString(startDate);
    const endDateObj = this.getDateString(endDate);
    const search = {
      submittedAt: { between: [startDateObj, endDateObj] },
      not: { processed: { eq: true } },
    } as any;
    if (project) {
      search.jobId = { eq: project.id };
    }
    const screeningObjs = await this.api.ListSceenings(search);
    this.screenings = screeningObjs.items;
    console.log(this.screenings);
    this.screenings.forEach((screening, i) => {
      this.screeningCrewMap[screening.id] = {
        crewName: screening.crewName,
        crewPhoneNumber: screening.crewPhoneNumber,
      };
      screening.submittedAt = DateUtils.format(screening.submittedAt);
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

  private getDateString(dateStr) {
    const date = new Date(dateStr);
    const moment1 = moment(date);
    return moment1.toISOString();
  }

  public isInvalid(index: number) {
    const questionForm = this.resultForm.controls;
    const controlName = `screening${index + 1}`;
    return (
      questionForm[controlName].invalid &&
      (questionForm[controlName].dirty || questionForm[controlName].touched)
    );
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

  public async submit() {
    const updateSceenings = [];
    const SMSs = [];
    this.screenings.forEach((screening) => {
      const method = this.resultForm.controls[`method${screening.id}`].value;
      const result = this.resultForm.controls[`result${screening.id}`].value;
      console.log(result);
      if (method && result) {
        const { crewName, crewPhoneNumber } = this.screeningCrewMap[
          screening.id
        ];
        SMSs.push({
          type: "result",
          name: crewName,
          phonne: crewPhoneNumber,
          test: {
            result,
            method,
          },
        });
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
    const temp = await Promise.all(updateSceenings);
    console.log(SMSs);
    console.log(temp);
    const messages = this.messageService.sendMessage(SMSs);
    console.log(messages);
    this.fetch();
  }
}
