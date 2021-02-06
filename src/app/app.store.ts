import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '@store/state/app.state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { fetchMessageAction } from '@app/store/actions';
import { Toastr } from '@core/entities/toastr.interface';

@Injectable()
export class AppStore {

  constructor(private store: Store<State>) {}

  public fetchToastrMessage(toastr: Toastr): void {
    this.store.dispatch(fetchMessageAction({ toastr }));
  }
}
