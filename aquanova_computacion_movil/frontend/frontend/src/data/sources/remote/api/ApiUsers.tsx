import { User } from '../../../../domain/entities/User';
import { createMockApi } from './MockApi';

const seed: User[] = [
  {
    id: '1',
    name: 'Admin',
    lastname: 'Aquanova',
    phone: '0999999999',
    email: 'admin@aquanova.com',
    password: 'admin123',
    role: 'admin',
  },
];

export const ApiUsers = createMockApi<User>(seed);
