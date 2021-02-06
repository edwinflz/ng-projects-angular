import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { fetchMessageSuccessAction, fetchMessageAction } from '@store/actions';
import { ToastrService } from '@core/services/toastr.service';

@Injectable()
export class ToastrEffect {

  constructor(private action$: Actions, private service: ToastrService) {}

  fetchMessage$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(fetchMessageAction),
      map((action) => {
        this.service.toggleToastr(action.toastr);
        return fetchMessageSuccessAction();
      })
    )
  );
}
