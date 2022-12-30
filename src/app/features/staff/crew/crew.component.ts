import { Component, OnInit } from "@angular/core";
import { DateUtils } from "app/@shared/utils/date-utils";
import { APIService } from "app/API.service";
import { MessageService } from "primeng/api";

import { TextMessageService } from "../text-message-service";

@Component({
  selector: "app-crew",
  templateUrl: "./crew.component.html",
  styleUrls: ["./crew.component.scss"],
  providers: [TextMessageService],
})
export class CrewComponent implements OnInit {
  crews = [];
  loading = true;
  cols = [
    { field: "name", header: "Name" },
    { field: "phonenumber", header: "Phone number" },
    { field: "email", header: "Email" },
    { field: "DOB", header: "DOB" },
    { field: "vaxxStatus", header: "Vax Status" },
    { field: "healthCardNumber", header: "Health Card Number" },
  ];
  constructor(
    private api: APIService,
    private textMessageService: TextMessageService,
    private messagetService: MessageService
  ) {}

  async ngOnInit() {
    const crewObjs = await this.api.ListCrews();
    this.crews = crewObjs.items.map((i) => {
      i.DOB = DateUtils.format(i.DOB);
      return i;
    });
    this.loading = false;
  }

  async remind(crew) {
    console.log(crew);
    const message = [
      {
        type: "reminder",
        name: crew.name,
        phonne: crew.phonenumber,
      },
    ];
    const result = await this.textMessageService.sendMessage(message);
    console.log(result);
    this.messagetService.add({
      key: "tst",
      severity: "success",
      summary: "Success",
      detail: "Reminder sent.",
    });
  }
}
