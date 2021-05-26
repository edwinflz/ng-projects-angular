import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadUsersDataAction, loadUsersDataSuccess } from '@store/actions';
import { AuthService } from '@core/services/api/auth.service';


@Injectable()
export class UserEffects {
  constructor(
    private action$: Actions,
    private authService: AuthService,
  ) {}

  fetchUser$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(loadUsersDataAction),
      switchMap(() =>
        this.authService.getUser(
          this.authService.fetchToken,
          this.authService.fetchUserId
        )
      ),
      map((response) => {
        this.authService.setUserLocalStorage(response);
        return loadUsersDataSuccess({ user: response });
      }),
      catchError(() => {
        return EMPTY;
      })
    )
  );

}
