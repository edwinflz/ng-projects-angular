import { combineReducers } from '@ngrx/store';

import { authDataReducer as auth } from '@auth/store/reducers/auth.reducer';
import { authLoadingReducer as authLoading } from '@auth/store/reducers/loading-auth.reducer';

export const authRootReducer = combineReducers({
  authLoading,
  auth,
});
