import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppStore } from '@app/app.store';
import { AuthService } from '@core/services/api/auth.service';
import { ToastrTypes } from '../entities/toastr.interface';

const DEFAULT = 'FINE';
@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptorService {
  constructor(private facade: AppStore, private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (this.processError(error) !== DEFAULT) {
          this.facade.fetchToastrMessage({
            message: this.processError(error),
            type: ToastrTypes.ERROR,
          });
        }
        this.facade.errorApiAction();
        return throwError(error);
      }),
    );
  }

  public processError(error: HttpErrorResponse): string {
    if (error.status === 422) {
      const { error: errorCustom } = error;
      if (errorCustom) {
        return errorCustom.message;
      }
      return this.destructuringError(error);
    }
    if (error.status === 0) {
      return 'Servidor caido!, intente nuevamente';
    }
    if (error.status === 404) {
      return error.error.message;
    }
    if (error.status === 401) {
      return error.error.message;
    }
    if (error.status === 419) {
      this.authService.logout();
      return error.error.message;
    }
    if (error.status === 500) {
      return 'Error interno en el servidor!';
    }
    return DEFAULT;
  }

  public destructuringError(error: HttpErrorResponse): string {
    let msg = '';
    const {
      error: { errors: validationErrors },
    } = error;

    for (const property in validationErrors) {
      if (validationErrors.hasOwnProperty(property)) {
        msg += validationErrors[property] + '\n';
      }
    }
    return msg;
  }
}
