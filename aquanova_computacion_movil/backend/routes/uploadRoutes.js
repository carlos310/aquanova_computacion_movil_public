import express from 'express';
import { uploadController } from '../controllers/uploadController.js';
import { upload, uploadErrorHandler } from '../middleware/uploadMiddleware.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// 
// RUTAS DE SUBIDA DE ARCHIVOS
// 

// POST - Subir una imagen
router.post(
  '/image',
  authMiddleware,
  upload.single('image'),
  uploadErrorHandler,
  uploadController.uploadImage
);

// POST - Subir múltiples imágenes
router.post(
  '/images',
  authMiddleware,
  upload.array('images', 10), // Máximo 10 archivos
  uploadErrorHandler,
  uploadController.uploadMultipleImages
);

export default router;
