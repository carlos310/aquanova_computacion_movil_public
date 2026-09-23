import { useState, useEffect } from 'react';
import { CrudRepository } from '../../domain/repositories/CrudRepository';

export function useCrud<T extends { id: string }>(repository: CrudRepository<T>) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadAll = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await repository.getAll();
      setItems(data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const remove = async (id: string) => {
    try {
      await repository.remove(id);
      setItems(items.filter(i => i.id !== id));
    } catch (e: any) {
      setError(e.message);
    }
  };

  const create = async (item: Omit<T, 'id'>) => {
    try {
      const created = await repository.create(item);
      setItems([...items, created]);
      return created;
    } catch (e: any) {
      setError(e.message);
      throw e;
    }
  };

  const update = async (id: string, item: Partial<T>) => {
    try {
      const updated = await repository.update(id, item);
      setItems(items.map(i => (i.id === id ? updated : i)));
      return updated;
    } catch (e: any) {
      setError(e.message);
      throw e;
    }
  };

  const getById = async (id: string) => {
    try {
      return await repository.getById(id);
    } catch (e: any) {
      setError(e.message);
      return undefined;
    }
  };

  useEffect(() => {
    loadAll();
  }, []);

  return { items, loading, error, remove, create, update, getById, reload: loadAll };
}
