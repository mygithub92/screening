import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private store: Store<any>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(err => {
        switch (err.status) {
          case 401: {
            if (err.error.error === 'TokenExpired') {
              this.router.navigate(['/login']);
            } else {
              this.router.navigate(['/no-access']);
            }
            break;
          }
          case 403:
            {
              this.router.navigate(['/no-access']);
            }
            const error = err.message || err.statusText;
            return throwError(error);
        }
      })
    );
  }
}
