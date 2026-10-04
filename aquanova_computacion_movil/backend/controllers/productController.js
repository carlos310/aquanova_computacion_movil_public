import { productModel } from '../models/Product.js';



export const productController = {
  // GET: Obtener todos los productos
  async getAllProducts(req, res) {
    try {
      const products = await productModel.getAllProducts();
      res.json({
        success: true,
        message: 'Productos obtenidos correctamente',
        data: products,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener productos',
        error: error.message,
      });
    }
  },

  // GET: Obtener producto por ID
  async getProductById(req, res) {
    try {
      const { id } = req.params;
      const product = await productModel.getProductById(id);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Producto no encontrado',
        });
      }

      res.json({
        success: true,
        message: 'Producto obtenido correctamente',
        data: product,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener producto',
        error: error.message,
      });
    }
  },

  // POST: Crear nuevo producto
  async createProduct(req, res) {
    try {
      const { id, name, description, price, stock, image_uri } = req.body;

      // Validar campos requeridos
      if (!name || !description || !price) {
        return res.status(400).json({
          success: false,
          message: 'Faltan campos requeridos (name, description, price)',
        });
      }

      const newProduct = {
        id,
        name,
        description,
        price: parseFloat(price),
        stock: parseInt(stock) || 0,
        image_uri,
      };

      await productModel.createProduct(newProduct);

      res.status(201).json({
        success: true,
        message: 'Producto creado correctamente',
        data: newProduct,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al crear producto',
        error: error.message,
      });
    }
  },

  // PUT: Actualizar producto
  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const { name, description, price, stock, image_uri } = req.body;

      // Verificar que el producto existe
      const product = await productModel.getProductById(id);
      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Producto no encontrado',
        });
      }

      await productModel.updateProduct(id, {
        name,
        description,
        price: parseFloat(price),
        stock: parseInt(stock),
        image_uri,
      });

      res.json({
        success: true,
        message: 'Producto actualizado correctamente',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al actualizar producto',
        error: error.message,
      });
    }
  },

  // DELETE: Eliminar producto
  async deleteProduct(req, res) {
    try {
      const { id } = req.params;

      // Verificar que el producto existe
      const product = await productModel.getProductById(id);
      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Producto no encontrado',
        });
      }

      await productModel.deleteProduct(id);

      res.json({
        success: true,
        message: 'Producto eliminado correctamente',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al eliminar producto',
        error: error.message,
      });
    }
  },

  // GET: Obtener productos disponibles
  async getAvailableProducts(req, res) {
    try {
      const products = await productModel.getAvailableProducts();
      res.json({
        success: true,
        message: 'Productos disponibles obtenidos',
        data: products,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener productos disponibles',
        error: error.message,
      });
    }
  },

  // GET: Buscar productos
  async searchProducts(req, res) {
    try {
      const { query } = req.query;

      if (!query) {
        return res.status(400).json({
          success: false,
          message: 'El parámetro query es requerido',
        });
      }

      const products = await productModel.searchProducts(query);

      res.json({
        success: true,
        message: 'Búsqueda realizada correctamente',
        data: products,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al buscar productos',
        error: error.message,
      });
    }
  },

  // PUT: Actualizar stock
  async updateStock(req, res) {
    try {
      const { id } = req.params;
      const { quantity, action } = req.body;

      // Verificar que el producto existe
      const product = await productModel.getProductById(id);
      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Producto no encontrado',
        });
      }

      if (action === 'increase') {
        await productModel.increaseStock(id, quantity);
      } else if (action === 'decrease') {
        await productModel.reduceStock(id, quantity);
      } else {
        return res.status(400).json({
          success: false,
          message: 'Action debe ser "increase" o "decrease"',
        });
      }

      res.json({
        success: true,
        message: 'Stock actualizado correctamente',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al actualizar stock',
        error: error.message,
      });
    }
  },
};
