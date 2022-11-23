import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'app/API.service';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: "app-question-form",
  templateUrl: "./question-form.component.html",
  styleUrls: ["./question-form.component.scss"],
})
export class QuestionFormComponent implements OnInit {
  public loading = true;
  public forms;
  public cols = [
    { field: "name", header: "Name" },
    { field: "createdAt", header: "Created Date" },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: APIService,
    public dialogService: DialogService,
    public messageService: MessageService
  ) {}

  async ngOnInit() {
    const formObj = await this.api.ListForms();
    console.log(formObj);
    this.forms = formObj.items;
    this.loading = false;
  }

  public addEdit(form: any) {
    const id = form ? form.id : -1;
    this.router.navigate(["../add-edit-form", id], {
      relativeTo: this.route,
    });
  }
}
