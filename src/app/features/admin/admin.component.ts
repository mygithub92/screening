import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'app/API.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "tt-admin",
  template: ` <p-blockUI [blocked]="true"></p-blockUI>
    <router-outlet></router-outlet>`,
})
export class AdminComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: APIService
  ) {}

  ngOnInit() {
    this.router.navigate(["jobs"], { relativeTo: this.route });
  }

  ngOnDestroy(): void {}
}
