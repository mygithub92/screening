import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'app/API.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-add-edit-question",
  templateUrl: "./add-edit-question.component.html",
  styleUrls: ["./add-edit-question.component.scss"],
})
export class AddEditQuestionComponent implements OnInit, OnDestroy {
  actionsSubscription: Subscription;
  questionForm;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private route: ActivatedRoute,
    private api: APIService
  ) {}

  ngOnInit(): void {}

  save() {
    this.ref.close({ result: "ssss" });
  }

  ngOnDestroy(): void {
    this.actionsSubscription.unsubscribe();
  }
}
