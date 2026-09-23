import { AuthRepository } from '../../domain/repositories/AuthRepository';
import { User } from '../../domain/entities/User';
import { ApiUsers } from '../sources/remote/api/ApiUsers';

export const AuthRepositoryImpl: AuthRepository = {
  async login(email: string, password: string): Promise<User> {
    const response = await ApiUsers.getAll();
    const user = response.data.find(u => u.email === email && u.password === password);
    if (!user) {
      throw new Error('Correo o contraseña incorrectos');
    }
    return user;
  },
  async register(user: Omit<User, 'id' | 'role'>): Promise<User> {
    const response = await ApiUsers.getAll();
    const exists = response.data.some(u => u.email === user.email);
    if (exists) {
      throw new Error('Ya existe un usuario con ese correo');
    }
    const created = await ApiUsers.create({ ...user, role: 'usuario' });
    return created.data;
  },
  async logout(): Promise<void> {
    return;
  },
};
