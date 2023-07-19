import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('access-token');
    const req = request.clone({
      setHeaders:{
        'Authorization':`Bearer ${token}`
      }
    })
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Check the error status code
        if (error.status === 401) {
          localStorage.clear();
          location.reload();
          this.router.navigateByUrl('/');
        } else if (error.status === 403) {
          // Handle forbidden error (e.g., show an access denied message)
        } else if (error.status === 404) {
          // Handle not found error (e.g., show a 404 page)
        } else {
          // Handle other errors (e.g., show a generic error message)
        }
        return throwError(error);
      })
    );
  }
}
