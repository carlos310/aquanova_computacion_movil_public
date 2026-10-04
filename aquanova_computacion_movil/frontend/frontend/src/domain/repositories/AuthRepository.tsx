import { User } from '../entities/User';

export interface AuthRepository {
  login(email: string, password: string): Promise<User>;
  register(user: Omit<User, 'id' | 'role'>): Promise<User>;
  logout(): Promise<void>;
}
