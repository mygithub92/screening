import { Component, OnInit } from '@angular/core';
import { DateUtils } from 'app/@shared/utils/date-utils';
import { APIService } from 'app/API.service';

@Component({
  selector: "app-crew",
  templateUrl: "./crew.component.html",
  styleUrls: ["./crew.component.scss"],
})
export class CrewComponent implements OnInit {
  crews = [];
  loading = true;
  cols = [
    { field: "name", header: "Name" },
    { field: "phonenumber", header: "Phone number" },
    { field: "email", header: "Email" },
    { field: "DOB", header: "DOB" },
    { field: "healthCardNumber", header: "Health Card Number" },
  ];
  constructor(private api: APIService) {}

  async ngOnInit() {
    const crewObjs = await this.api.ListCrews();
    this.crews = crewObjs.items.map((i) => {
      i.DOB = DateUtils.format(i.DOB);
      return i;
    });
    this.loading = false;
  }
}
