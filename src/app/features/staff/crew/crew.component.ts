import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'app/@core/services/auth.service';
import { DateUtils } from 'app/@shared/utils/date-utils';
import { APIService } from 'app/API.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

import { TextMessageService } from '../text-message-service';

@Component({
  selector: "app-crew",
  templateUrl: "./crew.component.html",
  styleUrls: ["./crew.component.scss"],
  providers: [TextMessageService],
})
export class CrewComponent implements OnInit, OnDestroy {
  crews = [];
  loading = true;
  subscriptions: Subscription[] = [];

  cols = [];
  constructor(
    private api: APIService,
    private textMessageService: TextMessageService,
    private messagetService: MessageService,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    this.subscriptions.push(
      this.authService.getCurrentAuthenticatedUser().subscribe(async (user) => {
        const group =
          user.signInUserSession.accessToken.payload["cognito:groups"];
        this.cols = [
          { field: "name", header: "Name" },
          { field: "phonenumber", header: "Phone number" },
          { field: "email", header: "Email" },
          { field: "DOB", header: "DOB(DD/MM/YYYY)" },
          { field: "vaxxStatus", header: "Vax Status" },
        ];
        if (group && group.indexOf("Admin") > -1) {
          this.cols.push({
            field: "healthCardNumber",
            header: "Health Card Number",
          });
        }
      })
    );
    const crewObjs = await this.api.ListCrews();
    this.crews = crewObjs.items.map((i) => {
      i.DOB = DateUtils.formatDOB(i.DOB);
      return i;
    });
    this.loading = false;
  }

  async remind(crew) {
    const message = [
      {
        type: "reminder",
        name: crew.name,
        phonne: crew.phonenumber,
      },
    ];
    const result = await this.textMessageService.sendMessage(message);
    this.messagetService.add({
      key: "tst",
      severity: "success",
      summary: "Success",
      detail: "Reminder sent.",
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subsription) => subsription.unsubscribe());
  }
}
