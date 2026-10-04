import pool from '../database/connection.js';



export const userModel = {
  // Obtener todos los usuarios
  async getAllUsers() {
    const [users] = await pool.query('SELECT * FROM users ORDER BY created_at DESC');
    return users;
  },

  // Obtener usuario por ID
  async getUserById(id) {
    const [users] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return users[0] || null;
  },

  // Obtener usuario por email
  async getUserByEmail(email) {
    const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return users[0] || null;
  },

  // Crear nuevo usuario
  async createUser(userData) {
    const { id, name, lastname, email, password, phone, role } = userData;
    const query = `
      INSERT INTO users (id, name, lastname, email, password, phone, role)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await pool.query(query, [
      id,
      name,
      lastname,
      email,
      password,
      phone,
      role || 'usuario',
    ]);
    return result;
  },

  // Actualizar usuario
  async updateUser(id, userData) {
    const { name, lastname, email, password, phone, role } = userData;
    const query = `
      UPDATE users
      SET name = ?, lastname = ?, email = ?, password = ?, phone = ?, role = ?
      WHERE id = ?
    `;
    const [result] = await pool.query(query, [
      name,
      lastname,
      email,
      password,
      phone,
      role,
      id,
    ]);
    return result;
  },

  // Eliminar usuario
  async deleteUser(id) {
    const query = 'DELETE FROM users WHERE id = ?';
    const [result] = await pool.query(query, [id]);
    return result;
  },

  // Obtener usuarios por rol
  async getUsersByRole(role) {
    const [users] = await pool.query('SELECT * FROM users WHERE role = ?', [role]);
    return users;
  },
};
