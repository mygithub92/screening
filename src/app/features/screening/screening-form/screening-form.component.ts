import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/@core/services/auth.service';
import { DateUtils } from 'app/@shared/utils/date-utils';
import { APIService } from 'app/API.service';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-screening-form",
  templateUrl: "./screening-form.component.html",
  styleUrls: ["./screening-form.component.scss"],
})
export class ScreeningFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  jobs = [];
  selectedJob;
  totalQuestions;
  questions = [];
  formId;
  loading = true;
  totalNumberQuestion = 0;
  expiredMessage;
  isExpired = false;
  crew;
  jobIdMap = {};
  locations = [
    { label: "Set", value: "Set" },
    { label: "Basecamp", value: "Basecamp" },
    { label: "Location", value: "Location" },
  ];
  subscriptions: Subscription[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: APIService,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      selectedJob: [null, Validators.required],
      selectedLocation: [null, Validators.required],

      questionForm: this.fb.group({}),
    });

    this.form.get("selectedJob").valueChanges.subscribe((value) => {
      this.selectedJob = value;
      this.getJobForm(this.selectedJob);
    });
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.authService.getCurrentAuthenticatedUser().subscribe(async (user) => {
        const userName = user.signInUserSession.accessToken.payload["username"];
        const crews = await this.api.ListCrews({ userName: { eq: userName } });
        this.crew = crews.items[0];
        this.selectedJob = this.crew.defaultJobId;
        const jobObjs = await this.api.ListJobs();
        console.log(jobObjs);
        const jobs = [];
        jobObjs.items.forEach((jobObj) => {
          this.jobIdMap[jobObj.id] = jobObj;
          jobs.push({ label: jobObj.code, value: jobObj.id });
        });
        this.jobs = jobs;
        this.form.patchValue({
          selectedJob: this.selectedJob,
          selectedLocation: this.locations[0].value,
        });
      })
    );
  }

  private getResultForIndex(index: number) {
    if (index < 3) {
      return "failed";
    }
    return "caution";
  }

  private async getJobForm(jobId) {
    this.expiredMessage = null;
    this.isExpired = false;
    const forms = await this.api.ListFormJobs({ jobId: { eq: jobId } });
    const selectedJobObj = this.jobIdMap[jobId];
    const jobEndDateAws = selectedJobObj.endDate;
    if (jobEndDateAws) {
      const jobEndDate = new Date(jobEndDateAws);
      if (moment(new Date()).isAfter(jobEndDate)) {
        this.isExpired = true;
        this.expiredMessage = `The selected Project has expired on: ${DateUtils.format(
          jobEndDate
        )}`;
      }
    }
    const jobFormId = forms.items[0].form.id;
    if (this.formId !== jobFormId) {
      this.loading = true;
      this.formId = jobFormId;
      const form = await this.api.GetForm(this.formId);
      const options = await this.api.ListOptions();
      options.items.sort((a, b) => a.order - b.order);
      this.totalNumberQuestion = form.questions.items.length;
      this.totalQuestions = form.questions.items.map((q, i) => {
        return {
          ...q,
          options: options.items,
          resultForYes: this.getResultForIndex(i),
        };
      });
      const questionForm: FormGroup = this.form.controls[
        "questionForm"
      ] as FormGroup;
      this.questions.push(this.totalQuestions[0]);
      questionForm.addControl(
        "question1",
        new FormControl(null, Validators.required)
      );
      questionForm.valueChanges.subscribe((formControl) => {
        console.log(formControl);
        Object.keys(formControl).forEach((key, i) => {
          if (key.startsWith("question")) {
            const value = formControl[key];
            const nextIndex = i + 1;
            if (value === "Yes") {
              this.questions.splice(nextIndex);
            }
            if (
              value === "No" &&
              nextIndex === this.questions.length &&
              nextIndex < this.totalNumberQuestion
            ) {
              const controlName = `question${nextIndex + 1}`;

              this.questions.push(this.totalQuestions[nextIndex]);
              this.questionForm.addControl(
                controlName,
                new FormControl(null, Validators.required)
              );
            }
          }
        });
      });
      this.loading = false;
      console.log(this.questions);
      console.log(forms);
      console.log(form);
    }
  }

  public get questionForm() {
    return this.form.controls["questionForm"] as FormGroup;
  }

  private findJobName(jobId: string) {
    return this.jobs.find((job) => job.value === jobId).label;
  }

  public async submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.loading = true;
      const rawValue = this.form.getRawValue();
      console.log(rawValue);
      let noAnswer = true;
      const answeredQuestionArray = [];
      const sceeningObj = await this.api.CreateSceening({
        jobId: rawValue.selectedJob,
        jobName: this.findJobName(rawValue.selectedJob),
        crewId: this.crew.id,
        crewName: this.crew.name,
        crewPhoneNumber: this.crew.phonenumber,
        submittedAt: new Date().toISOString(),
        location: rawValue.selectedLocation,
      });
      console.log(sceeningObj);
      let result;
      this.totalQuestions.forEach((question, i) => {
        const questionIndex = `question${i + 1}`;
        const answeredQuestion = {
          question: question.title,
        } as any;
        const questionAswer = rawValue.questionForm[questionIndex];
        if (questionAswer) {
          if (noAnswer) {
            answeredQuestion.answer = questionAswer;
          } else {
            answeredQuestion.answer = null;
          }
          if (answeredQuestion.answer === "Yes") {
            result = question.resultForYes;
          }
          noAnswer = noAnswer && questionAswer === "No";
        } else {
          answeredQuestion.answer = null;
        }
        answeredQuestionArray.push(
          this.api.CreateAnsweredQuestion({
            sceeningAnsweredQuestionsId: sceeningObj.id,
            question: answeredQuestion.question,
            answer: answeredQuestion.answer,
            order: question.order,
          })
        );
      });

      const response = await Promise.all(answeredQuestionArray);
      console.log(response);
      this.router.navigate(["result", { result }], {
        relativeTo: this.route,
      });
    }
  }

  public isInvalid(index: number) {
    const questionForm = this.questionForm.controls;
    const controlName = `question${index + 1}`;
    return (
      questionForm[controlName].invalid &&
      (questionForm[controlName].dirty || questionForm[controlName].touched)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subsription) => subsription.unsubscribe());
  }
}
