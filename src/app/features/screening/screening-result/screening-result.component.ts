import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-screening-result",
  templateUrl: "./screening-result.component.html",
  styleUrls: ["./screening-result.component.scss"],
})
export class ScreeningResultComponent implements OnInit {
  message = "Proceed to testing";
  className = "healthy";
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((param) => {
      const result = param.get("result");
      if ("failed" === result) {
        this.message =
          "Do not go into work, contact department head and covid coordinator";
        this.className = "unhealthy";
      }
      if ("caution" === result) {
        this.message =
          "Call your covid coordinator to discuss BEFORE ENTERING the workplace";
        this.className = "caution";
      }
    });
  }

  ngOnInit(): void {}
}
