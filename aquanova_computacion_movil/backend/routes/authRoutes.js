import express from 'express';
import { authController } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();


// RUTAS DE AUTENTICACIÓN


// POST - Login
router.post('/login', authController.login);

// POST - Registro
router.post('/register', authController.register);

// GET - Obtener perfil (requiere autenticación)
router.get('/profile', authMiddleware, authController.getProfile);

export default router;
