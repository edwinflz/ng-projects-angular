import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '@store/state/app.state';
import { Observable } from 'rxjs';

import { fetchMessageAction, loadUsersDataAction } from '@store/actions';
import { Toastr } from '@core/entities/toastr.interface';
import { User } from '@core/entities/user.interface';
import { errorDataAction } from '@auth/store/actions/auth.actions';

@Injectable()
export class AppStore {

  constructor(private store: Store<State>) {}

  get user$(): Observable<User> {
    return this.store.pipe(select((x) => x.user));
  }

  public fetchToastrMessage(toastr: Toastr): void {
    this.store.dispatch(fetchMessageAction({ toastr }));
  }

  public loadUser(): void {
    this.store.dispatch(loadUsersDataAction());
  }

  public errorApiAction(): void {
    this.store.dispatch(errorDataAction());
  }
}
