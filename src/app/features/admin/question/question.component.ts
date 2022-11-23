import { Component, OnDestroy, OnInit } from '@angular/core';
import { APIService } from 'app/API.service';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { AddEditQuestionComponent } from '../add-edit-question/add-edit-question.component';

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.scss"],
})
export class QuestionComponent implements OnInit, OnDestroy {
  public loading = true;
  public questions;
  public cols = [{ field: "title", header: "Title" }];
  public display: boolean = false;
  constructor(
    private api: APIService,
    public dialogService: DialogService,
    public messageService: MessageService
  ) {}

  async ngOnInit() {
    const questionObj = await this.api.ListQuestions();
    this.questions = questionObj.items;
    console.log(this.questions);
    this.loading = false;
  }
  ref: DynamicDialogRef;

  show(data) {
    this.ref = this.dialogService.open(AddEditQuestionComponent, {
      header: "Choose a Product",
      width: "70%",
      contentStyle: { overflow: "auto" },
      baseZIndex: 10000,
      data,
    });

    this.ref.onClose.subscribe((product: any) => {
      if (product) {
        this.messageService.add({
          severity: "info",
          summary: "Product Selected",
          detail: product.name,
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
