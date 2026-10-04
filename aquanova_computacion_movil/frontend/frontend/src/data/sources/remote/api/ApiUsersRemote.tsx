import { User } from '../../../../domain/entities/User';
import { SyncService } from '../../../../utils/SyncService';

// 
// API DE USUARIOS - USA SYNCSERVICE
// 

export const ApiUsersRemote = {
  async getAll() {
    const data = await SyncService.getAll('/users');
    return { data };
  },

  async getById(id: string) {
    const data = await SyncService.getById('/users', id);
    return { data };
  },

  async create(item: Omit<User, 'id'>) {
    const data = await SyncService.create('/users', {
      ...item,
      id: Date.now().toString()
    });
    return { data };
  },

  async update(id: string, item: Partial<User>) {
    const data = await SyncService.update('/users', id, item);
    return { data };
  },

  async remove(id: string) {
    await SyncService.delete('/users', id);
    return { data: undefined };
  },
};
