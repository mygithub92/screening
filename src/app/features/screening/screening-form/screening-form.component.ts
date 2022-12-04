import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/@core/services/auth.service';
import { APIService } from 'app/API.service';

@Component({
  selector: "app-screening-form",
  templateUrl: "./screening-form.component.html",
  styleUrls: ["./screening-form.component.scss"],
})
export class ScreeningFormComponent implements OnInit {
  form: FormGroup;
  jobs = [];
  selectedJob;
  totalQuestions;
  questions = [];
  formId;
  loading = true;
  totalNumberQuestion = 0;
  crew;
  constructor(
    private api: APIService,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      selectedJob: [null, Validators.required],
      questionForm: this.fb.group({}),
    });

    this.form.get("selectedJob").valueChanges.subscribe((value) => {
      this.selectedJob = value;
      this.getJobForm(this.selectedJob);
    });
  }

  ngOnInit(): void {
    this.authService.getCurrentAuthenticatedUser().subscribe(async (user) => {
      const userName = user.signInUserSession.accessToken.payload["username"];
      const crews = await this.api.ListCrews({ userName: { eq: userName } });
      this.crew = crews.items[0];
      this.selectedJob = this.crew.defaultJobId;
      const jobCrews = await this.api.ListCrewJobs({
        crewId: { eq: this.crew.id },
      });
      const jobs = [];
      jobCrews.items.forEach((jobCrew) =>
        jobs.push({ label: jobCrew.job.code, value: jobCrew.job.id })
      );
      this.jobs = jobs;
      this.form.patchValue({ selectedJob: this.selectedJob });
    });
  }

  private async getJobForm(jobId) {
    const forms = await this.api.ListFormJobs({ jobId: { eq: jobId } });
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
      const rawValue = this.form.getRawValue();
      console.log(rawValue);
      let noAnswer = true;
      const answeredQuestionArray = [];
      const sceeningObj = await this.api.CreateSceening({
        jobId: rawValue.selectedJob,
        jobName: this.findJobName(rawValue.selectedJob),
        crewId: this.crew.id,
        crewName: this.crew.name,
      });
      this.totalQuestions.forEach((question, i) => {
        const questionIndex = `question${i + 1}`;
        const answeredQuestion = {
          question: question.title,
        } as any;
        if (rawValue.questionForm[questionIndex]) {
          if (noAnswer) {
            answeredQuestion.answer = rawValue.questionForm[questionIndex];
          } else {
            answeredQuestion.answer = null;
          }
          noAnswer = noAnswer && rawValue.questionForm[questionIndex] === "No";
        } else {
          answeredQuestion.answer = null;
        }
        answeredQuestionArray.push(
          this.api.CreateAnsweredQuestion({
            sceeningAnsweredQuestionsId: sceeningObj.id,
            question: answeredQuestion.question,
            answer: answeredQuestion.answer,
          })
        );
      });

      const result = await Promise.all(answeredQuestionArray);
      console.log(result);
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
}
