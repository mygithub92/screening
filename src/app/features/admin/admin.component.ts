import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "tt-admin",
  template: ` <p-blockUI [blocked]="true"></p-blockUI>
    <router-outlet></router-outlet>`,
})
export class AdminComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.navigate(["jobs"], { relativeTo: this.route });
  }

  ngOnDestroy(): void {}
}
