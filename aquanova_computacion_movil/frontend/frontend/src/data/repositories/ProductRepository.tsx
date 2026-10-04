import { Product } from '../../domain/entities/Product';
import { ProductRepository } from '../../domain/repositories/ProductRepository';
import { ApiProductsRemote } from '../sources/remote/api/ApiProductsRemote';
import { createCrudRepository } from './CrudRepositoryImpl';

export const ProductRepositoryImpl: ProductRepository = createCrudRepository<Product>(ApiProductsRemote);
