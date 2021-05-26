import { createAction, props } from '@ngrx/store';
import { User } from '@core/entities/user.interface';
import { type } from '@app/utils/type-action';


export const loadUsersDataAction = createAction(
  type('[Global/API] Load user data')
);

export const loadUsersDataSuccess = createAction(
  type('[Global/API] Load user data success'),
  props<{ user: User }>()
);

