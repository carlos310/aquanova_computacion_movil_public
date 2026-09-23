import { Branch } from '../entities/Branch';
import { CrudRepository } from './CrudRepository';

export interface BranchRepository extends CrudRepository<Branch> {}
