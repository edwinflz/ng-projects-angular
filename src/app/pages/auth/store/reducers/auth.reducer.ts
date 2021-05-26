import { Action, createReducer, on } from '@ngrx/store';

import {
  loginUserSuccessAction,
  registerUserSuccessAction,
} from '@auth/store/actions/auth.actions';
import { AuthServer } from '@core/entities/user.interface';

export const initialState: AuthServer = {} as AuthServer;

const featureReducer = createReducer(
  initialState,
  on(registerUserSuccessAction, (state, { authServer }) => {
    return authServer;
  }),
  on(loginUserSuccessAction, (state, { authServer }) => {
    return authServer;
  })
);

export const authDataReducer = (
  state: AuthServer,
  action: Action
): AuthServer => {
  return featureReducer(state, action);
};
