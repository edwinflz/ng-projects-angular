import { Action, createReducer, on } from '@ngrx/store';

import { loadUsersDataSuccess } from '@store/actions';
import { User } from '@core/entities/user.interface';

export const initialState: User = {} as User;

const featureReducer = createReducer(
  initialState,
  on(loadUsersDataSuccess, (state, { user }) => {
    return user;
  }),
);

export const userReducer = (
  state: User,
  action: Action
): User => {
  return featureReducer(state, action);
};
