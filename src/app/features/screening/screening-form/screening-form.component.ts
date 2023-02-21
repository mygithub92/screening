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
  projectForm: FormGroup;
  foundJob;
  defaultJobCode;
  totalQuestions;
  questions = [];
  formId;
  loading = false;
  totalNumberQuestion = 0;
  expiredMessage;
  isExpired = false;
  projectFetched = false;
  questionFormSub: Subscription;
  crew;
  noProject;
  locations = [
    { label: "Please select...", value: null },
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
    this.projectForm = this.fb.group({
      projectCode: [null, Validators.required],
    });

    this.form = this.fb.group({
      selectedLocation: [null, Validators.required],
      questionForm: this.fb.group({}),
    });
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.authService.getCurrentAuthenticatedUser().subscribe(async (user) => {
        const userName = user.signInUserSession.accessToken.payload["username"];
        const crews = await this.api.ListCrews({ userName: { eq: userName } });
        this.crew = crews.items[0];
        this.defaultJobCode = this.crew.defaultJobId;
        this.projectForm.controls["projectCode"].setValue(this.defaultJobCode);
      })
    );
  }

  public async findJob() {
    this.projectForm.markAllAsTouched();
    if (this.projectForm.valid) {
      this.isExpired = false;

      this.projectFetched = false;
      this.loading = true;
      this.noProject = false;
      const projectCode = this.projectForm.getRawValue().projectCode;
      const jobs = await this.api.ListJobs({
        location: { eq: projectCode.toUpperCase() },
      });
      if (jobs && jobs.items.length > 0) {
        this.projectFetched = true;
        this.foundJob = jobs.items[0];
        this.checkExpired();
        const currentFormId = this.foundJob.forms.items[0].formId;

        if (this.formId !== currentFormId) {
          this.formId = currentFormId;
          this.getJobForm();
        } else {
          this.loading = false;
        }
      } else {
        this.loading = false;
        this.noProject = true;
      }
    }
  }

  private checkExpired() {
    const jobEndDateAws = this.foundJob.endDate;
    if (jobEndDateAws) {
      const jobEndDate = new Date(jobEndDateAws);
      if (moment(new Date()).isAfter(jobEndDate)) {
        this.isExpired = true;
        this.expiredMessage = `The selected Project has expired on: ${DateUtils.format(
          jobEndDate
        )}`;
      }
    }
  }

  private getResultForIndex(index: number) {
    if (index < 3) {
      return "failed";
    }
    return "caution";
  }

  private async getJobForm() {
    this.expiredMessage = null;

    if (this.questionFormSub) {
      this.questionFormSub.unsubscribe();
    }
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
    this.questionFormSub = questionForm.valueChanges.subscribe(
      (formControl) => {
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
      }
    );
    this.loading = false;
  }

  public get questionForm() {
    return this.form.controls["questionForm"] as FormGroup;
  }

  public async submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.loading = true;
      const rawValue = this.form.getRawValue();
      let noAnswer = true;
      const answeredQuestionArray = [];
      const sceeningObj = await this.api.CreateSceening({
        jobId: this.foundJob.id,
        jobName: this.foundJob.code,
        crewId: this.crew.id,
        crewName: this.crew.name,
        crewPhoneNumber: this.crew.phonenumber,
        submittedAt: new Date().toISOString(),
        location: rawValue.selectedLocation,
      });
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
      this.router.navigate(["result", { result }], {
        relativeTo: this.route,
      });
    }
  }

  public isInvalid(controlName: string) {
    return (
      this.form.controls[controlName].invalid &&
      (this.form.controls[controlName].dirty ||
        this.form.controls[controlName].touched)
    );
  }

  public isQuestionInvalid(index: number) {
    const questionForm = this.questionForm.controls;
    const controlName = `question${index + 1}`;
    return (
      questionForm[controlName].invalid &&
      (questionForm[controlName].dirty || questionForm[controlName].touched)
    );
  }

  public isProjectFormInvalid(controlName: string) {
    return (
      this.projectForm.controls[controlName].invalid &&
      (this.projectForm.controls[controlName].dirty ||
        this.projectForm.controls[controlName].touched)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subsription) => subsription.unsubscribe());
  }
}
