import { AuthServer } from '@core/entities/user.interface';

export const authFeatureName = 'authModuleState';

export type AuthState = Readonly<{
  authLoading: boolean,
  auth: AuthServer,
}>;
