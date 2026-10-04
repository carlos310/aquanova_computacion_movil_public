import express from 'express';
import { branchController } from '../controllers/branchController.js';

const router = express.Router();


// GET - Obtener todas las sucursales
router.get('/', branchController.getAllBranches);

// GET - Obtener sucursales cercanas
router.get('/nearby', branchController.getNearbyBranches);

// GET - Buscar sucursales
router.get('/search', branchController.searchBranches);

// GET - Obtener sucursal por ID
router.get('/:id', branchController.getBranchById);

// POST - Crear nueva sucursal
router.post('/', branchController.createBranch);

// PUT - Actualizar sucursal
router.put('/:id', branchController.updateBranch);

// PUT - Actualizar ubicación GPS
router.put('/:id/location', branchController.updateLocation);

// DELETE - Eliminar sucursal
router.delete('/:id', branchController.deleteBranch);

export default router;
