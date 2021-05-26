import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {  map, switchMap, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  loginUserAction,
  loginUserSuccessAction,
  registerUserAction,
  registerUserSuccessAction,
} from '@auth/store/actions/auth.actions';
import { AppStore } from '@app/app.store';
import { AuthService } from '@core/services/api/auth.service';
import { AuthServer, User } from '@core/entities/user.interface';
import { ToastrTypes } from '@core/entities/toastr.interface';


@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private router: Router,
    private appStore: AppStore,
    private authService: AuthService
  ) {}

  registerUserData$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(registerUserAction),
      switchMap((action) => this.authService.registerUser(action.user)),
      tap((response) => {
        if (response.status === 200) this.userResponseSuccess(response);
      }),
      map((response) => {
        return registerUserSuccessAction({ authServer: response });
      })
    )
  );

  loginUserData$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(loginUserAction),
      switchMap((action) => this.authService.loginUser(action.user)),
      tap((response) => {
        if (response.status === 200) this.userResponseSuccess(response);
      }),
      map((response) => {
        return loginUserSuccessAction({ authServer: response });
      })
    )
  );

  public userResponseSuccess(response: AuthServer): void {
    this.showToastr(response.msg);
    this.saveLocalStorage(response.token, response.user);
    this.appStore.loadUser();
    this.redirectToHome();
  }

  public showToastr(msg: string): void {
    this.appStore.fetchToastrMessage({
      message: msg,
      type: ToastrTypes.ERROR,
    });
  }

  public saveLocalStorage(token: string, user: User): void {
    this.authService.setTokenLocalStorage(token);
    this.authService.setUserLocalStorage(user);
  }

  public redirectToHome(): void {
    // this.router.navigate([adminRoot]);
  }
}
