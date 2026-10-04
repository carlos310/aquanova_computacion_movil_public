import { AuthRepositoryImpl } from '../../../data/repositories/AuthRepository';

export const LogoutAuth = (): Promise<void> => {
  return AuthRepositoryImpl.logout();
};
