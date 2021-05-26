import { createAction, props } from '@ngrx/store';
import { type } from '@app/utils/type-action';
import { AuthServer, User } from '@core/entities/user.interface';

export const registerUserAction = createAction(
  type('[Auth/API] register user data'),
  props<{ user: User }>()
);
export const registerUserSuccessAction = createAction(
  type('[Auth/API] register user data success'),
  props<{ authServer: AuthServer }>()
);
export const loginUserAction = createAction(
  type('[Auth/API] login user data'),
  props<{ user: User }>()
);
export const loginUserSuccessAction = createAction(
  type('[Auth/API] login user data success'),
  props<{ authServer: AuthServer }>()
);
export const errorDataAction = createAction(
  type('[Global/API] Error data api')
);
