import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { TranslocoModule } from '@ngneat/transloco';

import { HeaderState } from '@header/store/state/header.state';
import { headerFeatureName } from '@header/entities/header.constants';
import { headerRootReducer } from '@header/store/reducer';
import { HeaderStore } from '@header/header.store';
import { HeaderContainer } from '@header/header.container';

export const HEADER_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<HeaderState>
  >('Feature Header Reducers');


@NgModule({
  declarations: [HeaderContainer],
  imports: [
    CommonModule,
    RouterModule,
    TranslocoModule,
    StoreModule.forFeature(headerFeatureName, HEADER_REDUCER_TOKEN),
  ],
  exports: [HeaderContainer],
  providers: [
    HeaderStore,
    {
      provide: HEADER_REDUCER_TOKEN,
      useValue: headerRootReducer
    }
  ],
})
export class HeaderModule { }
