import { createFeatureSelector } from '@ngrx/store';
import { authFeatureName, AuthState } from '@auth/store/state/auth.state';

export const authRootSelector = createFeatureSelector<AuthState>(
  authFeatureName
);
