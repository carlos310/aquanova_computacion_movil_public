import express from 'express';
import { userController } from '../controllers/userController.js';

const router = express.Router();


// GET - Obtener todos los usuarios
router.get('/', userController.getAllUsers);

// GET - Obtener usuarios por rol
router.get('/role', userController.getUsersByRole);

// GET - Obtener usuario por ID
router.get('/:id', userController.getUserById);

// POST - Crear nuevo usuario
router.post('/', userController.createUser);

// PUT - Actualizar usuario
router.put('/:id', userController.updateUser);

// DELETE - Eliminar usuario
router.delete('/:id', userController.deleteUser);

export default router;
