import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { ApiUsersRemote } from '../sources/remote/api/ApiUsersRemote';
import { createCrudRepository } from './CrudRepositoryImpl';

export const UserRepositoryImpl: UserRepository = createCrudRepository<User>(ApiUsersRemote);
