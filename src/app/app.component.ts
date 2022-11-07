import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'app/@core/services/auth.service';
import { UserActions } from 'app/@state/actions';
import * as fromUser from 'app/@state/reducers';

@Component({
  selector: "tt-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  roleTypes = [
    { label: "Grower", value: "GROWER" },
    { label: "Logistics", value: "LOGISTICS" },
    { label: "Winery", value: "WINERY" },
    { label: "Bottling", value: "BOTTLING" },
    { label: "Storage", value: "STORAGE" },
    { label: "Distributo", value: "DISTRIBUTOR" },
  ];

  partners = [
    {
      id: "9d21ab4d-8175-4ff0-ae61-54d168373bec",
      isActive: true,
      role: {
        name: "Pan Grower",
        location: "ACT",
        id: "8a5c443d-7089-4d82-8a17-0633672ee789",
        type: "GROWER",
        isActive: true,
      },
      companyId: "92c16d75-b284-49d2-b177-57e17d42e51e",
      companyName: "PanTest2",
    },
  ];

  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store<fromUser.State>
  ) {
    this.authService.getCurrentAuthenticatedUser().subscribe((user) => {
      if (user) {
        const currentUser = {
          user: { userName: user.attributes.sub, email: user.attributes.email },
        } as any;
        currentUser.user.roleTypes = this.roleTypes;
        currentUser.user.partners = this.partners;
        this.store.dispatch(UserActions.userLoggedIn(currentUser));
        this.router.navigate(["main"]);
      }
    });
  }
}
