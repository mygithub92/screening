import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { UserIdleService } from 'angular-user-idle';
import { MenuDataService } from 'app/@core/services/menu-data.service';
import { RoleType, User } from 'app/@shared/api-interfaces';
import { UserActions } from 'app/@state/actions';
import * as fromUser from 'app/@state/reducers';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  user$: Observable<User>;
  notifications: [{ message: 'message' }];
  displayNotifications: boolean;
  @Input() showMenuButton = true;
  _selectedRole: RoleType;
  adminUserId = 'cf5cede4-f7e1-430e-b90c-61d24f2fff0a';

  constructor(
    private store: Store<fromUser.State>,
    private userIdle: UserIdleService,
    private menuDataService: MenuDataService,
    private confirmationService: ConfirmationService
  ) {
    this.displayNotifications = false;
  }

  ngOnInit() {
    this.user$ = this.store.pipe(select(fromUser.selecUser));
    //Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe();

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {
      this.logout();
    });
  }

  get selectedRole() {
    return this._selectedRole;
  }

  set selectedRole(roleType: RoleType) {
    this.store.dispatch(UserActions.userRoleChange({ roleType }));
  }

  onLogout() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to logout?',
      accept: () => this.logout()
    });
  }

  private logout() {
    this.store.dispatch(UserActions.userLogout());
    this.userIdle.stopWatching();
  }

  showNotificationSidebar() {
    this.displayNotifications = true;
  }

  toggleMenu() {
    this.menuDataService.toggleMenuBar.next(true);
  }

  selectTheme(theme: string) {}
}
