import pool from '../database/connection.js';


export const branchModel = {
  // Obtener todas las sucursales
  async getAllBranches() {
    const [branches] = await pool.query('SELECT * FROM branches ORDER BY created_at DESC');
    return branches;
  },

  // Obtener sucursal por ID
  async getBranchById(id) {
    const [branches] = await pool.query('SELECT * FROM branches WHERE id = ?', [id]);
    return branches[0] || null;
  },

  // Obtener sucursales por nombre
  async getBranchesByName(name) {
    const query = 'SELECT * FROM branches WHERE name LIKE ?';
    const [branches] = await pool.query(query, [`%${name}%`]);
    return branches;
  },

  // Obtener sucursales cercanas (por coordenadas)
  async getNearbyBranches(latitude, longitude, radiusKm = 10) {
    const query = `
      SELECT *,
      (6371 * acos(cos(radians(?)) * cos(radians(latitude)) * cos(radians(longitude) - radians(?)) + sin(radians(?)) * sin(radians(latitude)))) AS distance
      FROM branches
      HAVING distance < ?
      ORDER BY distance
    `;
    const [branches] = await pool.query(query, [latitude, longitude, latitude, radiusKm]);
    return branches;
  },

  // Crear nueva sucursal
  async createBranch(branchData) {
    const { id, name, address, phone, photo_uri, latitude, longitude } = branchData;
    const query = `
      INSERT INTO branches (id, name, address, phone, photo_uri, latitude, longitude)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await pool.query(query, [
      id,
      name,
      address,
      phone,
      photo_uri || null,
      latitude || null,
      longitude || null,
    ]);
    return result;
  },

  // Actualizar sucursal
  async updateBranch(id, branchData) {
    const { name, address, phone, photo_uri, latitude, longitude } = branchData;
    const query = `
      UPDATE branches
      SET name = ?, address = ?, phone = ?, photo_uri = ?, latitude = ?, longitude = ?
      WHERE id = ?
    `;
    const [result] = await pool.query(query, [
      name,
      address,
      phone,
      photo_uri,
      latitude,
      longitude,
      id,
    ]);
    return result;
  },

  // Eliminar sucursal
  async deleteBranch(id) {
    const query = 'DELETE FROM branches WHERE id = ?';
    const [result] = await pool.query(query, [id]);
    return result;
  },

  // Actualizar ubicación GPS de sucursal
  async updateBranchLocation(id, latitude, longitude) {
    const query = 'UPDATE branches SET latitude = ?, longitude = ? WHERE id = ?';
    const [result] = await pool.query(query, [latitude, longitude, id]);
    return result;
  },

  // Buscar sucursales por dirección
  async searchBranchesByAddress(addressTerm) {
    const query = 'SELECT * FROM branches WHERE address LIKE ? OR name LIKE ?';
    const searchPattern = `%${addressTerm}%`;
    const [branches] = await pool.query(query, [searchPattern, searchPattern]);
    return branches;
  },
};
