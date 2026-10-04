import { AuthRepository } from '../../domain/repositories/AuthRepository';
import { User } from '../../domain/entities/User';
import { SyncService } from '../../utils/SyncService';

export const AuthRepositoryImpl: AuthRepository = {
  async login(email: string, password: string): Promise<User> {
    try {
      const response = await SyncService.request('/auth/login', {
        method: 'POST',
        body: { email, password },
      });

      if (!response.success) {
        throw new Error(response.message || 'Error en el login');
      }

      // Guardar token
      if (response.token) {
        await SyncService.setToken(response.token);
      }

      return response.data;
    } catch (error: any) {
      throw new Error(error.message || 'Error en el login');
    }
  },

  async register(user: Omit<User, 'id' | 'role'>): Promise<User> {
    try {
      const response = await SyncService.request('/auth/register', {
        method: 'POST',
        body: user,
      });

      if (!response.success) {
        throw new Error(response.message || 'Error en el registro');
      }

      // Guardar token
      if (response.token) {
        await SyncService.setToken(response.token);
      }

      return response.data;
    } catch (error: any) {
      throw new Error(error.message || 'Error en el registro');
    }
  },

  async logout(): Promise<void> {
    try {
      await SyncService.clearToken();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  },
};
