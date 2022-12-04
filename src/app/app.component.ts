import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { APIService } from './API.service';

@Component({
  selector: "tt-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private router: Router, private api: APIService) {
    this.router.navigate(["main"]);
  }
}
