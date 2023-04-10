import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { APIService } from "app/API.service";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { Subscription } from "rxjs";
import { take } from "rxjs/operators";

@Component({
  selector: "app-add-edit-form",
  templateUrl: "./add-edit-form.component.html",
  styleUrls: ["./add-edit-form.component.scss"],
})
export class AddEditFormComponent implements OnInit, OnDestroy {
  actionsSubscription: Subscription;
  questionForm;
  form: FormGroup;
  formQuestions = [];
  formId: string;
  header = "Edit Form";
  loading = true;
  public cols = [{ field: "title", header: "Title" }];

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private router: Router,
    private route: ActivatedRoute,
    private api: APIService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: [null, Validators.required],
      questions: this.fb.array([]),
    });
    this.actionsSubscription = route.params
      .pipe(take(1))
      .subscribe((params) => {
        this.formId = params.id;
        if (params.id === "-1") {
          this.loading = false;
          this.header = "Add Form";
        } else {
          this.getForm(params.id);
        }
      });
  }

  ngOnInit(): void {}

  public isInvalid(controlName: string) {
    return (
      this.form.controls[controlName].invalid &&
      (this.form.controls[controlName].dirty ||
        this.form.controls[controlName].touched)
    );
  }

  public get isAddition() {
    return this.formId === "-1";
  }

  public get questions() {
    return this.form.controls["questions"] as FormArray;
  }

  public add() {
    const questinoForm = this.fb.group({
      title: [null, Validators.required],
    });
    this.questions.push(questinoForm);
  }

  async getForm(id) {
    this.questionForm = await this.api.GetForm(id);
    this.loading = false;
    this.form.patchValue({ name: this.questionForm.name });
    const undeletedQuestions = this.questionForm.questions.items.filter(
      (question) => !question._deleted
    );
    this.form.setControl(
      "questions",
      this.fb.array(
        undeletedQuestions.map((q) =>
          this.fb.group({
            id: [q.id],
            _version: q._version,
            title: [q.title, Validators.required],
          })
        )
      )
    );
  }

  addQuestion() {
    const questionForm = this.fb.group({
      title: [null, Validators.required],
    });

    this.questions.push(questionForm);
  }

  deleteQuestion(index: number) {
    this.questions.removeAt(index);
  }

  async save() {
    this.loading = true;
    let formId = this.formId;
    const request = [];
    const deleteRequests = [];
    const remainQuestionIds = [];
    if (this.isAddition) {
      const form = await this.api.CreateForm({
        name: this.form.getRawValue().name,
      });
      formId = form.id;
    } else {
      await this.api.UpdateForm({
        id: this.formId,
        _version: this.questionForm._version,
        name: this.form.getRawValue().name,
      });
    }
    for (let i = 0; i < this.questions.length; i++) {
      const rawValue = (this.questions.at(i) as FormGroup).getRawValue();
      if (rawValue.id) {
        remainQuestionIds.push(rawValue.id);
        request.push(
          this.api.UpdateQuestion({
            id: rawValue.id,
            _version: rawValue._version,
            title: rawValue.title,
            order: i + 1,
            formQuestionsId: formId,
          })
        );
      } else {
        request.push(
          this.api.CreateQuestion({
            title: rawValue.title,
            order: i + 1,
            formQuestionsId: formId,
          })
        );
      }
    }
    if (!this.isAddition) {
      this.questionForm.questions.items.forEach((x) => {
        if (!remainQuestionIds.includes(x.id)) {
          deleteRequests.push(
            this.api.DeleteQuestion({ id: x.id, _version: x._version })
          );
        }
      });
    }

    await Promise.all(request);
    await Promise.all(deleteRequests);
    this.router.navigate(["../../forms"], { relativeTo: this.route });
  }

  public cancel() {
    this.router.navigate(["../forms"], {
      relativeTo: this.route,
    });
  }

  ngOnDestroy(): void {
    this.actionsSubscription.unsubscribe();
  }
}
