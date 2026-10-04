import { Product } from '../../../../domain/entities/Product';
import { SyncService } from '../../../../utils/SyncService';

// 
// API DE PRODUCTOS - USA SYNCSERVICE
// 

// Mapear snake_case de BD a camelCase del frontend
const mapProductFromDB = (data: any): Product => {
  if (!data) return data;
  return {
    id: data.id,
    name: data.name,
    description: data.description,
    price: data.price ? Number.parseFloat(data.price) : 0,
    stock: data.stock ? Number.parseInt(data.stock) : 0,
    imageUri: data.image_uri, // Mapear image_uri -> imageUri
  };
};

// Mapear camelCase del frontend a snake_case para la BD
const mapProductToDB = (product: Partial<Product>) => {
  const mapped: any = { ...product };
  if ('imageUri' in product) {
    mapped.image_uri = product.imageUri;
    delete mapped.imageUri;
  }
  return mapped;
};

export const ApiProductsRemote = {
  async getAll() {
    const data = await SyncService.getAll('/products');
    return { data: Array.isArray(data) ? data.map(mapProductFromDB) : data };
  },

  async getById(id: string) {
    const data = await SyncService.getById('/products', id);
    return { data: mapProductFromDB(data) };
  },

  async create(item: Omit<Product, 'id'>) {
    const mappedItem = mapProductToDB(item);
    const data = await SyncService.create('/products', {
      ...mappedItem,
      id: Date.now().toString()
    });
    return { data: mapProductFromDB(data) };
  },

  async update(id: string, item: Partial<Product>) {
    const mappedItem = mapProductToDB(item);
    const data = await SyncService.update('/products', id, mappedItem);
    return { data: mapProductFromDB(data) };
  },

  async remove(id: string) {
    await SyncService.delete('/products', id);
    return { data: undefined };
  },
};
