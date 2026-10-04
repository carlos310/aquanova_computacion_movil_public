import { User } from '../entities/User';
import { CrudRepository } from './CrudRepository';

export interface UserRepository extends CrudRepository<User> {}
