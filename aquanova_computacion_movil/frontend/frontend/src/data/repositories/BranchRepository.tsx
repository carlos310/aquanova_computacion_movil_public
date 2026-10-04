import { Branch } from '../../domain/entities/Branch';
import { BranchRepository } from '../../domain/repositories/BranchRepository';
import { ApiBranchesRemote } from '../sources/remote/api/ApiBranchesRemote';
import { createCrudRepository } from './CrudRepositoryImpl';

export const BranchRepositoryImpl: BranchRepository = createCrudRepository<Branch>(ApiBranchesRemote);
