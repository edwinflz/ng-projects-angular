import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthRoutingModule } from '@app/pages/auth/auth-routing.module';

import { FormLoginComponent } from '@app/pages/auth/components/form-login/form-login.component';
import { FormRegisterComponent } from '@app/pages/auth/components/form-register/form-register.component';
import { AuthContainer } from '@app/pages/auth/containers/auth.container';

import { authFeatureName, AuthState } from '@auth/store/state/auth.state';
import { AuthEffects } from '@auth/store/effects/auth.effects';
import { authRootReducer } from '@auth/store/reducers';
import { AuthStore } from '@auth/auth.store';

export const AUTH_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<AuthState>
>('Feature Home Reducers');


@NgModule({
  declarations: [AuthContainer, FormLoginComponent, FormRegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    TranslocoModule,
    StoreModule.forFeature(authFeatureName, AUTH_REDUCER_TOKEN),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [
    AuthStore,
    {
      provide: AUTH_REDUCER_TOKEN,
      useValue: authRootReducer,
    },
  ],
})
export class AuthModule { }
