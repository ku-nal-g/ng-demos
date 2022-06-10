import {HttpErrorResponse,HttpEvent,HttpHandler,HttpInterceptor,HttpRequest,HttpResponse,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, of, tap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(public toastr: ToastrService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.toastr.success('Request Done', 'Success');
        }
      }),
      catchError((err: HttpErrorResponse) => {
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
          console.log('this is client side error');
          errorMessage = `An error has occurred: ${err.error.message}`;
        } else {
          console.log('This is server side error');

          errorMessage = `Error Code : ${err.status}`;
          this.toastr.error(errorMessage);
          // ,Message : ${err.message}
          console.log(errorMessage);
        }
        return throwError(errorMessage);
      })
    );
  }
}
