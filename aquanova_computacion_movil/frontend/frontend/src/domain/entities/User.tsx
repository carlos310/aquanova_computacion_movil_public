export type Role = 'admin' | 'usuario';

export interface User {
  id: string;
  name: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
  role: Role;
}
