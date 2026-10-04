import { CrudRepository } from '../../repositories/CrudRepository';

export function createCrudUseCases<T extends { id: string }>(repository: CrudRepository<T>) {
  return {
    getAll: (): Promise<T[]> => repository.getAll(),
    getById: (id: string): Promise<T | undefined> => repository.getById(id),
    create: (item: Omit<T, 'id'>): Promise<T> => repository.create(item),
    update: (id: string, item: Partial<T>): Promise<T> => repository.update(id, item),
    remove: (id: string): Promise<void> => repository.remove(id),
  };
}
