import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-screening-result",
  templateUrl: "./screening-result.component.html",
  styleUrls: ["./screening-result.component.scss"],
})
export class ScreeningResultComponent implements OnInit {
  className = "healthy";

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((param) => {
      const result = param.get("result");
      if ("failed" === result) {
        this.className = "unhealthy";
      }
      if ("caution" === result) {
        this.className = "caution";
      }
    });
  }

  ngOnInit(): void {}
}
