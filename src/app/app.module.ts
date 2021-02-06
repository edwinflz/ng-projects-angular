import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastrModule } from 'ngx-toastr';
import { AppInitModule } from '@app/config/app-init.module';
import { TranslocoBrowserModule } from '@app/config/transloco-browser.module';
import { ComponentsModule } from '@app/components/components.module';
import { ToastrEffect } from '@store/effects/toastr.effects';

import { environment as ENV } from '@environment';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppContainer } from '@app/app.container';
import { AppStore } from '@app/app.store';
import { globalReducers } from '@app/store/reducers';

export const REDUCER_TOKEN = new InjectionToken('Registered Reducers');

@NgModule({
  declarations: [
    AppContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppInitModule,
    TranslocoBrowserModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    EffectsModule.forRoot([
      ToastrEffect
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: ENV.production,
    }),
    ComponentsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-full-width',
      preventDuplicates: true
    }),
  ],
  providers: [
    AppStore,
    {
      provide: REDUCER_TOKEN,
      useValue: globalReducers,
    },
  ],
  bootstrap: [AppContainer]
})
export class AppModule { }
