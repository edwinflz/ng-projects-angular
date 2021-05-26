import { Action, createReducer, on } from '@ngrx/store';
import {
  errorDataAction,
  loginUserAction,
  loginUserSuccessAction,
  registerUserAction,
  registerUserSuccessAction,
} from '@auth/store/actions/auth.actions';

export const initialState: boolean = false;

const featureReducer = createReducer(
  initialState,
  on(registerUserAction, () => true),
  on(loginUserAction, () => true),
  on(registerUserSuccessAction, () => false),
  on(loginUserSuccessAction, () => false),
  on(errorDataAction, () => false)
);

export function authLoadingReducer(state: boolean, action: Action): boolean {
  return featureReducer(state, action);
}
