import { Product } from '../../domain/entities/Product';
import { ProductRepository } from '../../domain/repositories/ProductRepository';
import { ApiProducts } from '../sources/remote/api/ApiProducts';
import { createCrudRepository } from './CrudRepositoryImpl';

export const ProductRepositoryImpl: ProductRepository = createCrudRepository<Product>(ApiProducts);
