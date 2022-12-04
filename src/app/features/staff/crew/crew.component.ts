import { Component, OnInit } from '@angular/core';
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
    { field: "address", header: "Address" },
    { field: "companyName", header: "Company name" },
  ];
  constructor(private api: APIService) {}

  async ngOnInit() {
    const crewObjs = await this.api.ListCrews();
    this.crews = crewObjs.items;
    this.loading = false;
  }
}
