import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Account } from 'app/@shared/api-interfaces';
import { options, questions } from 'app/@shared/constant';
import { APIService } from 'app/API.service';
import { Observable } from 'rxjs';

import * as fromAdmin from '../../state/reducers';

@Component({
  selector: "tt-account-list",
  templateUrl: "./account-list.component.html",
  styleUrls: ["./account-list.component.scss"],
  animations: [
    trigger("rowExpansionTrigger", [
      state(
        "void",
        style({
          transform: "translateX(-10%)",
          opacity: 0,
        })
      ),
      state(
        "active",
        style({
          transform: "translateX(0)",
          opacity: 1,
        })
      ),
      transition("* <=> *", animate("400ms cubic-bezier(0.86, 0, 0.07, 1)")),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AccountListComponent implements OnInit {
  accounts$: Observable<Account[]>;
  loading$: Observable<boolean>;

  cols: any[];
  roleCols: any[];
  partnerCols: any[];

  constructor(
    private store: Store<fromAdmin.State>,
    private router: Router,
    private route: ActivatedRoute,
    private api: APIService
  ) {}

  ngOnInit() {
    this.cols = [
      { field: "companyName", header: "Company Name" },
      { field: "email", header: "Email" },
      { field: "address", header: "Address" },
      { field: "accountType", header: "Type" },
      { field: "isActive", header: "Status" },
    ];

    this.roleCols = [
      { field: "name", header: "Role Name" },
      { field: "location", header: "Location" },
      { field: "type", header: "Role Type" },
      { field: "isActive", header: "Status" },
    ];

    this.partnerCols = [
      { field: "companyName", header: "Company Name" },
      { field: "name", header: "Partner Role" },
      { field: "type", header: "Role Type" },
      { field: "isActive", header: "Status" },
      { field: "location", header: "Location" },
    ];
  }

  // async delete() {
  //   const qpObjs = await this.api.ListQuestionOptions();
  //   const optionObjs = await this.api.ListOptions();
  //   const questionObjs = await this.api.ListOptions();
  //   console.log(qpObjs);
  //   const qos = [];
  //   const options = [];
  //   const questions = [];
  //   qpObjs.items.forEach((item) => {
  //     qos.push(
  //       this.api.DeleteQuestionOption({ id: item.id, _version: item._version })
  //     );
  //   });
  //   optionObjs.items.forEach((item) => {
  //     options.push(
  //       this.api.DeleteOption({
  //         id: item.id,
  //         _version: item._version,
  //       })
  //     );
  //   });
  //   questionObjs.items.forEach((item) => {
  //     qos.push(
  //       this.api.DeleteQuestionOption({ id: item.id, _version: item._version })
  //     );
  //     questions.push(
  //       this.api.DeleteQuestion({
  //         id: item.id,
  //         _version: item._version,
  //       })
  //     );
  //   });
  //   await Promise.all(options);
  //   await Promise.all(questions);
  //   await Promise.all(qos);
  //   console.log("Delettion done...");
  // }

  async init() {
    const optionsList$ = options.map((option, i) =>
      this.api.CreateOption({
        label: option,
        value: option,
        order: i + 1,
      })
    );
    const questionLiist$ = questions.map((question, i) =>
      this.api.CreateQuestion({
        title: question,
        order: i + 1,
      })
    );
    const optionObjs = await Promise.all(optionsList$);
    const questionObjs = await Promise.all(questionLiist$);
    optionObjs.sort((o) => o.order);
    questionObjs.sort((q) => q.order);

    Promise.all(
      questionObjs.map((q) =>
        optionObjs.map((o) =>
          this.api.CreateQuestionOption({
            questionId: q.id,
            optionId: o.id,
          })
        )
      )
    );
  }

  getPartner$(account: Account) {
    return this.store.pipe(select(fromAdmin.selectPartnersByAccount(account)));
  }

  selectAccount(accountId: string) {
    this.router.navigate(["add-edit", accountId]);
  }

  addAccount() {
    this.router.navigate(["add-edit", -1]);
  }
}
