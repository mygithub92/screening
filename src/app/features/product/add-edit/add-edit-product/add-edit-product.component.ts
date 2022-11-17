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
    const qo = quesitonOptionList.items.reduce((a, c) => {
      if (a[c.questionID]) {
        a[c.questionID]["options"].push(c.option);
      } else {
        a[c.questionID] = {};
        a[c.questionID]["title"] = c.question.title;
        a[c.questionID]["options"] = [];
        a[c.questionID]["options"].push(c.option);
      }
      return a;
    }, {});

    const control = [null, [Validators.required]];
    const controls = Object.keys(qo).reduce((a, c, i) => {
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
