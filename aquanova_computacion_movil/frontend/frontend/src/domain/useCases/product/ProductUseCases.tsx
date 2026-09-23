import { Product } from '../../entities/Product';
import { ProductRepositoryImpl } from '../../../data/repositories/ProductRepository';
import { createCrudUseCases } from '../crud/createCrudUseCases';

export const ProductUseCases = createCrudUseCases<Product>(ProductRepositoryImpl);
