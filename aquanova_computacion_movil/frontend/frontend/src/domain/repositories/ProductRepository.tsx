import { Product } from '../entities/Product';
import { CrudRepository } from './CrudRepository';

export interface ProductRepository extends CrudRepository<Product> {}
