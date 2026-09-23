import { User } from '../../entities/User';
import { AuthRepositoryImpl } from '../../../data/repositories/AuthRepository';

export const LoginAuth = (email: string, password: string): Promise<User> => {
  return AuthRepositoryImpl.login(email, password);
};
