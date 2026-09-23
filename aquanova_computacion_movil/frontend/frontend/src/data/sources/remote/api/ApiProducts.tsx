import { Product } from '../../../../domain/entities/Product';
import { createMockApi } from './MockApi';

const seed: Product[] = [
  {
    id: '1',
    name: 'Botellón 20L',
    description: 'Agua purificada, retornable',
    price: 3.5,
    stock: 100,
  },
  {
    id: '2',
    name: 'Botella 500ml',
    description: 'Agua purificada individual',
    price: 0.5,
    stock: 300,
  },
];

export const ApiProducts = createMockApi<Product>(seed);
