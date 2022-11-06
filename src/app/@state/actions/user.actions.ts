import { createAction, props } from '@ngrx/store';
import { RoleType, User } from 'app/@shared/api-interfaces';

export const userLoggedIn = createAction('[User] Logged In', props<{ user: User }>());
export const userLogout = createAction('[User] Log Out');
export const userRoleChange = createAction('[User] Role Change In', props<{ roleType: RoleType }>());
