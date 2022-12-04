import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  public loggedIn: BehaviorSubject<boolean>;

  constructor(private router: Router) {
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  public signUp(email, password): Observable<any> {
    return from(Auth.signUp(email, password));
  }

  public confirmSignUp(email, code): Observable<any> {
    return from(Auth.confirmSignUp(email, code));
  }

  public signIn(email, password): Observable<any> {
    return from(Auth.signIn(email, password)).pipe(
      tap(() => this.loggedIn.next(true))
    );
  }

  public getCurrentSession(): Observable<any> {
    return from(Auth.currentSession());
  }

  public getUserGroup(): Observable<any> {
    return from(Auth.currentAuthenticatedUser()).pipe(
      (user: any) =>
        user.signInUserSession.accessToken.payload["cognito:groups"]
    );
  }

  public getUserName(): Observable<any> {
    return from(Auth.currentAuthenticatedUser()).pipe(
      (user: any) => user.signInUserSession.accessToken.payload["username"]
    );
  }

  public getCurrentAuthenticatedUser() {
    return from(Auth.currentAuthenticatedUser());
  }

  public isAuthenticated(): Observable<boolean> {
    return from(Auth.currentAuthenticatedUser()).pipe(
      map((result) => {
        this.loggedIn.next(true);
        return true;
      }),
      catchError((error) => {
        this.loggedIn.next(false);
        return of(false);
      })
    );
  }

  public signOut() {
    from(Auth.signOut()).subscribe(
      () => {
        this.loggedIn.next(false);
        this.router.navigate(["main"]);
      },
      (error) => console.log(error)
    );
  }
}
