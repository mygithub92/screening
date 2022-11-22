import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { APIService } from 'app/API.service';
import { Subscription } from 'rxjs';

import * as fromAdmin from './state/reducers';

@Component({
  selector: "tt-admin",
  template: ` <p-blockUI [blocked]="true"></p-blockUI> `,
})
export class AdminComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(
    private store: Store<fromAdmin.State>,
    private router: Router,
    private route: ActivatedRoute,
    private api: APIService
  ) {}

  ngOnInit() {
    this.router.navigate(["manage"], { relativeTo: this.route });
  }

  ngOnDestroy(): void {}
}
