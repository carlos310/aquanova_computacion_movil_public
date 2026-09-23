import { User } from '../../entities/User';
import { UserRepositoryImpl } from '../../../data/repositories/UserRepository';
import { createCrudUseCases } from '../crud/createCrudUseCases';

export const UserUseCases = createCrudUseCases<User>(UserRepositoryImpl);
