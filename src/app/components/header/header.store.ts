import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '@app/store/state/app.state';

import { Header, HeaderSelection } from '@header/entities/header.interface';
import { setHeaderStyleAction } from '@header/store/actions/header.actions';
import { fetchHeaderStyle } from '@header/store/selectors/header-feature.selectors';

@Injectable()
export class HeaderStore {

  constructor(private store: Store<State>) {}

  public headerStyle$: Observable<Header> = this.store.pipe(
    select(fetchHeaderStyle)
  );

  public setHeaderStyle(selection: HeaderSelection): void {
    this.store.dispatch(setHeaderStyleAction({ selection }));
  }
}
