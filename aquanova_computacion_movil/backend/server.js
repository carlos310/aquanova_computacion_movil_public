import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import pool from './database/connection.js';

// Importar rutas
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import branchRoutes from './routes/branchRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import { authMiddleware, adminMiddleware } from './middleware/authMiddleware.js';

// Importar documentación de endpoints (antes de Swagger config)
import './swagger/endpoints.js';
import './swagger/paths.js';

// Importar configuración de Swagger (después de paths)
import { swaggerSpecs } from './swagger/swaggerConfig.js';

// Cargar variables de entorno
dotenv.config();

// Crear aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE


// Permitir CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true,
}));

// Parser de JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware de logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Servir archivos estáticos desde la carpeta assets
app.use('/assets', express.static('assets'));


// RUTAS API

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs, {
  swaggerOptions: {
    persistAuthorization: true,
  },
}));

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API Aquanova funcionando correctamente',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// Rutas públicas de autenticación
app.use('/api/auth', authRoutes);

// Rutas de subida de archivos (protegidas)
app.use('/api/upload', uploadRoutes);

// Rutas de usuarios (protegidas: primero auth, luego admin)
app.use('/api/users', authMiddleware, adminMiddleware, userRoutes);

// Rutas de productos (protegidas)
app.use('/api/products', authMiddleware, productRoutes);

// Rutas de sucursales (protegidas)
app.use('/api/branches', authMiddleware, branchRoutes);


// MANEJO DE ERRORES


// Ruta no encontrada (404)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada',
    path: req.path,
  });
});

// Manejador de errores global
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({
    success: false,
    message: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Error desconocido',
  });
});


// INICIAR SERVIDOR


app.listen(PORT, '0.0.0.0',() => {
  console.log(` Servidor corriendo en puerto ${PORT}`);
});

// Manejar cierre seguro
process.on('SIGINT', async () => {
  console.log('\n\n Cerrando servidor...');
  await pool.end();
  console.log(' Conexión a base de datos cerrada');
  process.exit(0);
});
