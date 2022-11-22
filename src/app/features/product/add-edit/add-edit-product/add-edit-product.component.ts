import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'app/API.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: "tt-add-edit-product",
  templateUrl: "./add-edit-product.component.html",
  styleUrls: ["./add-edit-product.component.scss"],
})
export class AddEditProductComponent implements OnInit {
  title = "Add Product";
  public form: FormGroup;
  public questions = [];
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private confirmationService: ConfirmationService,
    private api: APIService
  ) {}

  async ngOnInit() {
    const quesitonOptionList = await this.api.ListQuestionOptions();
    quesitonOptionList.items.sort(
      (a, b) => a.question.order - b.question.order
    );
    const qo = quesitonOptionList.items.reduce((a, c) => {
      if (a[c.questionId]) {
        a[c.questionId]["options"].push(c.option);
      } else {
        a[c.questionId] = {};
        a[c.questionId]["title"] = c.question.title;
        a[c.questionId]["order"] = c.question.order;
        a[c.questionId]["options"] = [];
        a[c.questionId]["options"].push(c.option);
      }
      return a;
    }, {});
    const control = [null, [Validators.required]];
    const controls = Object.keys(qo).reduce((a, c, i) => {
      qo[c].options.sort((a, b) => a.order - b.order);
      this.questions.push({
        id: c,
        title: qo[c].title,
        options: qo[c].options,
      });
      a[`question${i + 1}`] = control;
      return a;
    }, {});

    this.form = this.fb.group(controls);
  }

  onSave() {}

  onCancel() {
    this.confirmationService.confirm({
      message: "Are you sure that you want to perform this action?",
      accept: () => {
        this.router.navigate(["../product-list"], { relativeTo: this.route });
      },
    });
  }
}
