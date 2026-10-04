import { Branch } from '../../../../domain/entities/Branch';
import { SyncService } from '../../../../utils/SyncService';

// 
// API DE SUCURSALES - USA SYNCSERVICE
// 

// Mapear snake_case de BD a camelCase del frontend
const mapBranchFromDB = (data: any): Branch => {
  if (!data) return data;
  return {
    id: data.id,
    name: data.name,
    address: data.address,
    phone: data.phone,
    photoUri: data.photo_uri, // Mapear photo_uri -> photoUri
    latitude: data.latitude ? parseFloat(data.latitude) : undefined,
    longitude: data.longitude ? parseFloat(data.longitude) : undefined,
  };
};

// Mapear camelCase del frontend a snake_case para la BD
const mapBranchToDB = (branch: Partial<Branch>) => {
  const mapped: any = { ...branch };
  if ('photoUri' in branch) {
    mapped.photo_uri = branch.photoUri;
    delete mapped.photoUri;
  }
  return mapped;
};

export const ApiBranchesRemote = {
  async getAll() {
    const data = await SyncService.getAll('/branches');
    return { data: Array.isArray(data) ? data.map(mapBranchFromDB) : data };
  },

  async getById(id: string) {
    const data = await SyncService.getById('/branches', id);
    return { data: mapBranchFromDB(data) };
  },

  async create(item: Omit<Branch, 'id'>) {
    const mappedItem = mapBranchToDB(item);
    console.log(' Datos mapeados para BD:', mappedItem);
    const data = await SyncService.create('/branches', {
      ...mappedItem,
      id: Date.now().toString()
    });
    console.log(' Respuesta del servidor:', data);
    return { data: mapBranchFromDB(data) };
  },

  async update(id: string, item: Partial<Branch>) {
    const mappedItem = mapBranchToDB(item);
    const data = await SyncService.update('/branches', id, mappedItem);
    return { data: mapBranchFromDB(data) };
  },

  async remove(id: string) {
    await SyncService.delete('/branches', id);
    return { data: undefined };
  },
};
