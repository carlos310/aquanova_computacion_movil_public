import { Branch } from '../../entities/Branch';
import { BranchRepositoryImpl } from '../../../data/repositories/BranchRepository';
import { createCrudUseCases } from '../crud/createCrudUseCases';

export const BranchUseCases = createCrudUseCases<Branch>(BranchRepositoryImpl);
