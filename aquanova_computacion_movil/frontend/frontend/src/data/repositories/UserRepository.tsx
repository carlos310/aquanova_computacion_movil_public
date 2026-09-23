import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { ApiUsers } from '../sources/remote/api/ApiUsers';
import { createCrudRepository } from './CrudRepositoryImpl';

export const UserRepositoryImpl: UserRepository = createCrudRepository<User>(ApiUsers);
