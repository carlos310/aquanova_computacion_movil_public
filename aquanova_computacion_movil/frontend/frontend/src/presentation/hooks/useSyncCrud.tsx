import { useState, useEffect, useCallback } from 'react';
import { CrudRepository } from '../../domain/repositories/CrudRepository';
import { SyncService } from '../../data/services/SyncService';

// 
// HOOK MEJORADO PARA SINCRONIZACIÓN EN TIEMPO REAL
// 

export function useSyncCrud<T extends { id: string }>(
  repository: CrudRepository<T>,
  options: {
    autoSync?: boolean;
    syncInterval?: number; // en milisegundos
  } = {}
) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [lastSync, setLastSync] = useState<Date | null>(null);

  const autoSync = options.autoSync !== false;
  const syncInterval = options.syncInterval || 5000; // 5 segundos por defecto

  // Función para recargar todos los datos desde la BD
  const loadAll = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await repository.getAll();
      setItems(data);
      setLastSync(new Date());
    } catch (e: any) {
      setError(e.message);
      console.error('Error al cargar datos:', e);
    } finally {
      setLoading(false);
    }
  }, [repository]);

  // Eliminar un item
  const remove = useCallback(
    async (id: string) => {
      try {
        await repository.remove(id);
        setItems(items.filter(i => i.id !== id));
        setError('');
      } catch (e: any) {
        setError(e.message);
        throw e;
      }
    },
    [repository, items]
  );

  // Crear nuevo item
  const create = useCallback(
    async (item: Omit<T, 'id'>) => {
      try {
        const created = await repository.create(item);
        setItems([...items, created]);
        setError('');
        return created;
      } catch (e: any) {
        setError(e.message);
        throw e;
      }
    },
    [repository, items]
  );

  // Actualizar item
  const update = useCallback(
    async (id: string, item: Partial<T>) => {
      try {
        const updated = await repository.update(id, item);
        setItems(items.map(i => (i.id === id ? updated : i)));
        setError('');
        return updated;
      } catch (e: any) {
        setError(e.message);
        throw e;
      }
    },
    [repository, items]
  );

  // Obtener un item por ID
  const getById = useCallback(
    async (id: string) => {
      try {
        return await repository.getById(id);
      } catch (e: any) {
        setError(e.message);
        return undefined;
      }
    },
    [repository]
  );

  // Auto-sincronización: cargar datos al montar y cada X segundos
  useEffect(() => {
    loadAll();

    if (!autoSync) return;

    const interval = setInterval(() => {
      loadAll();
    }, syncInterval);

    return () => clearInterval(interval);
  }, [loadAll, autoSync, syncInterval]);

  // Verificar si hay cambios pendientes
  const hasUnsyncedChanges = useCallback(() => {
    return lastSync === null;
  }, [lastSync]);

  return {
    items,
    loading,
    error,
    remove,
    create,
    update,
    getById,
    reload: loadAll,
    lastSync,
    hasUnsyncedChanges,
  };
}
