import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.getCurrentSession().pipe(
      switchMap(session => {
        const token = session.getIdToken().getJwtToken();
        req = token
          ? req.clone({
              withCredentials: true,
              setHeaders: {
                Authorization: `Bearer ${token}`
              }
            })
          : req.clone({ withCredentials: true });
        return next.handle(req);
      })
    );
  }
}
