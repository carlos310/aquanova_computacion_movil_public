import express from 'express';
import { productController } from '../controllers/productController.js';

const router = express.Router();


// GET - Obtener todos los productos
router.get('/', productController.getAllProducts);

// GET - Obtener productos disponibles
router.get('/available', productController.getAvailableProducts);

// GET - Buscar productos
router.get('/search', productController.searchProducts);

// GET - Obtener producto por ID
router.get('/:id', productController.getProductById);

// POST - Crear nuevo producto
router.post('/', productController.createProduct);

// PUT - Actualizar producto
router.put('/:id', productController.updateProduct);

// PUT - Actualizar stock
router.put('/:id/stock', productController.updateStock);

// DELETE - Eliminar producto
router.delete('/:id', productController.deleteProduct);

export default router;
