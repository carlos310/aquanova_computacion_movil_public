import { ResponseApiDelivery } from '../models/ResponseApiDelivery';

const delay = (ms = 400) => new Promise(resolve => setTimeout(resolve, ms));

let nextId = 1000;
export const generateId = () => String(nextId++);

export function createMockApi<T extends { id: string }>(seed: T[]) {
  let items: T[] = [...seed];

  return {
    async getAll(): Promise<ResponseApiDelivery<T[]>> {
      await delay();
      return { success: true, message: 'OK', data: [...items] };
    },
    async getById(id: string): Promise<ResponseApiDelivery<T | undefined>> {
      await delay();
      const item = items.find(i => i.id === id);
      return { success: !!item, message: item ? 'OK' : 'No encontrado', data: item };
    },
    async create(item: Omit<T, 'id'>): Promise<ResponseApiDelivery<T>> {
      await delay();
      const created = { ...item, id: generateId() } as T;
      items = [...items, created];
      return { success: true, message: 'Creado', data: created };
    },
    async update(id: string, item: Partial<T>): Promise<ResponseApiDelivery<T>> {
      await delay();
      items = items.map(i => (i.id === id ? { ...i, ...item } : i));
      const updated = items.find(i => i.id === id) as T;
      return { success: true, message: 'Actualizado', data: updated };
    },
    async remove(id: string): Promise<ResponseApiDelivery<void>> {
      await delay();
      items = items.filter(i => i.id !== id);
      return { success: true, message: 'Eliminado', data: undefined as void };
    },
  };
}
