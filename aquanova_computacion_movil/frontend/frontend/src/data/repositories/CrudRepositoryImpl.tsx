import { CrudRepository } from '../../domain/repositories/CrudRepository';

interface MockApi<T> {
  getAll(): Promise<{ data: T[] }>;
  getById(id: string): Promise<{ data: T | undefined }>;
  create(item: Omit<T, 'id'>): Promise<{ data: T }>;
  update(id: string, item: Partial<T>): Promise<{ data: T }>;
  remove(id: string): Promise<{ data: void }>;
}

export function createCrudRepository<T extends { id: string }>(api: MockApi<T>): CrudRepository<T> {
  return {
    async getAll() {
      const response = await api.getAll();
      return response.data;
    },
    async getById(id: string) {
      const response = await api.getById(id);
      return response.data;
    },
    async create(item: Omit<T, 'id'>) {
      const response = await api.create(item);
      return response.data;
    },
    async update(id: string, item: Partial<T>) {
      const response = await api.update(id, item);
      return response.data;
    },
    async remove(id: string) {
      await api.remove(id);
    },
  };
}
