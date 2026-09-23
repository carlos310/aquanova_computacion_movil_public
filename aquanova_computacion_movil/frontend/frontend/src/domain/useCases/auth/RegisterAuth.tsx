import { User } from '../../entities/User';
import { AuthRepositoryImpl } from '../../../data/repositories/AuthRepository';

export const RegisterAuth = (user: Omit<User, 'id' | 'role'>): Promise<User> => {
  return AuthRepositoryImpl.register(user);
};
