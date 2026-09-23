import { Branch } from '../../domain/entities/Branch';
import { BranchRepository } from '../../domain/repositories/BranchRepository';
import { ApiBranches } from '../sources/remote/api/ApiBranches';
import { createCrudRepository } from './CrudRepositoryImpl';

export const BranchRepositoryImpl: BranchRepository = createCrudRepository<Branch>(ApiBranches);
