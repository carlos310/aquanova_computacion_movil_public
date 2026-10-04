import pool from '../database/connection.js';


export const productModel = {
  // Obtener todos los productos
  async getAllProducts() {
    const [products] = await pool.query('SELECT * FROM products ORDER BY created_at DESC');
    return products;
  },

  // Obtener producto por ID
  async getProductById(id) {
    const [products] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
    return products[0] || null;
  },

  // Obtener productos por rango de precio
  async getProductsByPriceRange(minPrice, maxPrice) {
    const [products] = await pool.query(
      'SELECT * FROM products WHERE price BETWEEN ? AND ? ORDER BY price',
      [minPrice, maxPrice]
    );
    return products;
  },

  // Obtener productos disponibles (stock > 0)
  async getAvailableProducts() {
    const [products] = await pool.query(
      'SELECT * FROM products WHERE stock > 0 ORDER BY created_at DESC'
    );
    return products;
  },

  // Crear nuevo producto
  async createProduct(productData) {
    const { id, name, description, price, stock, image_uri } = productData;
    const query = `
      INSERT INTO products (id, name, description, price, stock, image_uri)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const [result] = await pool.query(query, [
      id,
      name,
      description,
      price,
      stock || 0,
      image_uri || null,
    ]);
    return result;
  },

  // Actualizar producto
  async updateProduct(id, productData) {
    const { name, description, price, stock, image_uri } = productData;
    const query = `
      UPDATE products
      SET name = ?, description = ?, price = ?, stock = ?, image_uri = ?
      WHERE id = ?
    `;
    const [result] = await pool.query(query, [
      name,
      description,
      price,
      stock,
      image_uri,
      id,
    ]);
    return result;
  },

  // Eliminar producto
  async deleteProduct(id) {
    const query = 'DELETE FROM products WHERE id = ?';
    const [result] = await pool.query(query, [id]);
    return result;
  },

  // Actualizar stock de producto
  async updateStock(id, newStock) {
    const query = 'UPDATE products SET stock = ? WHERE id = ?';
    const [result] = await pool.query(query, [newStock, id]);
    return result;
  },

  // Reducir stock de producto
  async reduceStock(id, quantity) {
    const query = 'UPDATE products SET stock = stock - ? WHERE id = ?';
    const [result] = await pool.query(query, [quantity, id]);
    return result;
  },

  // Aumentar stock de producto
  async increaseStock(id, quantity) {
    const query = 'UPDATE products SET stock = stock + ? WHERE id = ?';
    const [result] = await pool.query(query, [quantity, id]);
    return result;
  },

  // Buscar productos por nombre
  async searchProducts(searchTerm) {
    const query = 'SELECT * FROM products WHERE name LIKE ? OR description LIKE ?';
    const searchPattern = `%${searchTerm}%`;
    const [products] = await pool.query(query, [searchPattern, searchPattern]);
    return products;
  },
};
