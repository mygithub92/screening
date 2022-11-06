import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Account } from 'app/@shared/api-interfaces';
import { Observable } from 'rxjs';

import * as fromAdmin from '../../state/reducers';

@Component({
  selector: 'tt-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
      state(
        'void',
        style({
          transform: 'translateX(-10%)',
          opacity: 0
        })
      ),
      state(
        'active',
        style({
          transform: 'translateX(0)',
          opacity: 1
        })
      ),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class AccountListComponent implements OnInit {
  accounts$: Observable<Account[]>;
  loading$: Observable<boolean>;

  cols: any[];
  roleCols: any[];
  partnerCols: any[];

  constructor(private store: Store<fromAdmin.State>, private router: Router, private route: ActivatedRoute) {
    this.loading$ = this.store.pipe(select(fromAdmin.selectLoading));
    this.accounts$ = this.store.pipe(select(fromAdmin.selectAccounts));
  }

  ngOnInit() {
    this.cols = [
      { field: 'companyName', header: 'Company Name' },
      { field: 'email', header: 'Email' },
      { field: 'address', header: 'Address' },
      { field: 'accountType', header: 'Type' },
      { field: 'isActive', header: 'Status' }
    ];

    this.roleCols = [
      { field: 'name', header: 'Role Name' },
      { field: 'location', header: 'Location' },
      { field: 'type', header: 'Role Type' },
      { field: 'isActive', header: 'Status' }
    ];

    this.partnerCols = [
      { field: 'companyName', header: 'Company Name' },
      { field: 'name', header: 'Partner Role' },
      { field: 'type', header: 'Role Type' },
      { field: 'isActive', header: 'Status' },
      { field: 'location', header: 'Location' }
    ];
  }

  getPartner$(account: Account) {
    return this.store.pipe(select(fromAdmin.selectPartnersByAccount(account)));
  }

  selectAccount(accountId: string) {
    this.router.navigate(['add-edit', accountId]);
  }

  addAccount() {
    this.router.navigate(['add-edit', -1]);
  }
}
