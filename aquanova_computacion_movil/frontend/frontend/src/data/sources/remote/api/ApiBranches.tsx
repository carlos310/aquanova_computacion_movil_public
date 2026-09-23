import { Branch } from '../../../../domain/entities/Branch';
import { createMockApi } from './MockApi';

const seed: Branch[] = [
  {
    id: '1',
    name: 'Sucursal Centro',
    address: 'Av. Principal 123',
    phone: '022345678',
    latitude: -0.180653,
    longitude: -78.467838,
  },
];

export const ApiBranches = createMockApi<Branch>(seed);
