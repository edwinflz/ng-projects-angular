import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from '@app/store/state/app.state';


import { loginUserAction, registerUserAction } from '@auth/store/actions/auth.actions';
import { authRootSelector } from '@auth/store/selectors/auth.selectors';
import { AuthServer, User } from '@core/entities/user.interface';

@Injectable()
export class AuthStore {
  constructor(private store: Store<State>) {}

  public authServer$: Observable<AuthServer> = this.store.pipe(
    select(authRootSelector),
    map((state) => state.auth)
  );

  public authLoading$: Observable<boolean> = this.store.pipe(
    select(authRootSelector),
    map((state) => state.authLoading)
  );

  public registerUser(user: User): void {
    this.store.dispatch(registerUserAction({ user }));
  }

  public loginUser(user: User): void {
    this.store.dispatch(loginUserAction({ user }));
  }
}
