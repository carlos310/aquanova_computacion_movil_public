import { branchModel } from '../models/Branch.js';


export const branchController = {
  // GET: Obtener todas las sucursales
  async getAllBranches(req, res) {
    try {
      const branches = await branchModel.getAllBranches();
      res.json({
        success: true,
        message: 'Sucursales obtenidas correctamente',
        data: branches,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener sucursales',
        error: error.message,
      });
    }
  },

  // GET: Obtener sucursal por ID
  async getBranchById(req, res) {
    try {
      const { id } = req.params;
      const branch = await branchModel.getBranchById(id);

      if (!branch) {
        return res.status(404).json({
          success: false,
          message: 'Sucursal no encontrada',
        });
      }

      res.json({
        success: true,
        message: 'Sucursal obtenida correctamente',
        data: branch,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener sucursal',
        error: error.message,
      });
    }
  },

  // POST: Crear nueva sucursal
  async createBranch(req, res) {
    try {
      const { id, name, address, phone, photo_uri, latitude, longitude } = req.body;
      console.log(' Datos recibidos en backend:', { id, name, address, phone, photo_uri, latitude, longitude });

      // Validar campos requeridos
      if (!name || !address || !phone) {
        return res.status(400).json({
          success: false,
          message: 'Faltan campos requeridos (name, address, phone)',
        });
      }

      const newBranch = {
        id,
        name,
        address,
        phone,
        photo_uri,
        latitude: latitude ? parseFloat(latitude) : null,
        longitude: longitude ? parseFloat(longitude) : null,
      };
      console.log(' Guardando sucursal:', newBranch);

      await branchModel.createBranch(newBranch);

      res.status(201).json({
        success: true,
        message: 'Sucursal creada correctamente',
        data: newBranch,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al crear sucursal',
        error: error.message,
      });
    }
  },

  // PUT: Actualizar sucursal
  async updateBranch(req, res) {
    try {
      const { id } = req.params;
      const { name, address, phone, photo_uri, latitude, longitude } = req.body;

      // Verificar que la sucursal existe
      const branch = await branchModel.getBranchById(id);
      if (!branch) {
        return res.status(404).json({
          success: false,
          message: 'Sucursal no encontrada',
        });
      }

      await branchModel.updateBranch(id, {
        name,
        address,
        phone,
        photo_uri,
        latitude: latitude ? parseFloat(latitude) : null,
        longitude: longitude ? parseFloat(longitude) : null,
      });

      const updatedBranch = await branchModel.getBranchById(id);

      res.json({
        success: true,
        message: 'Sucursal actualizada correctamente',
        data: updatedBranch,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al actualizar sucursal',
        error: error.message,
      });
    }
  },

  // DELETE: Eliminar sucursal
  async deleteBranch(req, res) {
    try {
      const { id } = req.params;

      // Verificar que la sucursal existe
      const branch = await branchModel.getBranchById(id);
      if (!branch) {
        return res.status(404).json({
          success: false,
          message: 'Sucursal no encontrada',
        });
      }

      await branchModel.deleteBranch(id);

      res.json({
        success: true,
        message: 'Sucursal eliminada correctamente',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al eliminar sucursal',
        error: error.message,
      });
    }
  },

  // GET: Buscar sucursales cercanas
  async getNearbyBranches(req, res) {
    try {
      const { latitude, longitude, radius } = req.query;

      if (!latitude || !longitude) {
        return res.status(400).json({
          success: false,
          message: 'Los parámetros latitude y longitude son requeridos',
        });
      }

      const branches = await branchModel.getNearbyBranches(
        parseFloat(latitude),
        parseFloat(longitude),
        radius ? parseFloat(radius) : 10
      );

      res.json({
        success: true,
        message: 'Sucursales cercanas obtenidas',
        data: branches,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener sucursales cercanas',
        error: error.message,
      });
    }
  },

  // GET: Buscar sucursales
  async searchBranches(req, res) {
    try {
      const { query } = req.query;

      if (!query) {
        return res.status(400).json({
          success: false,
          message: 'El parámetro query es requerido',
        });
      }

      const branches = await branchModel.searchBranchesByAddress(query);

      res.json({
        success: true,
        message: 'Búsqueda de sucursales realizada',
        data: branches,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al buscar sucursales',
        error: error.message,
      });
    }
  },

  // PUT: Actualizar ubicación GPS
  async updateLocation(req, res) {
    try {
      const { id } = req.params;
      const { latitude, longitude } = req.body;

      if (!latitude || !longitude) {
        return res.status(400).json({
          success: false,
          message: 'Los parámetros latitude y longitude son requeridos',
        });
      }

      // Verificar que la sucursal existe
      const branch = await branchModel.getBranchById(id);
      if (!branch) {
        return res.status(404).json({
          success: false,
          message: 'Sucursal no encontrada',
        });
      }

      await branchModel.updateBranchLocation(
        id,
        parseFloat(latitude),
        parseFloat(longitude)
      );

      res.json({
        success: true,
        message: 'Ubicación GPS actualizada correctamente',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al actualizar ubicación',
        error: error.message,
      });
    }
  },
};
