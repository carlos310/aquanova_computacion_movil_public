import swaggerJsdoc from 'swagger-jsdoc';

// 
// CONFIGURACIÓN DE SWAGGER/OPENAPI
// 

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Aquanova',
      version: '1.0.0',
      description: 'API REST para la gestión de usuarios, productos y sucursales de agua potable',
      contact: {
        name: 'Aquanova',
        email: 'info@aquanova.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local de desarrollo',
      },
      {
        url: 'http://192.168.1.7:3000',
        description: 'Servidor en red local (cambiar IP según corresponda)',
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Token JWT obtenido al hacer login',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: { type: 'string', example: '1' },
            name: { type: 'string', example: 'Admin' },
            lastname: { type: 'string', example: 'Aquanova' },
            email: { type: 'string', example: 'admin@aquanova.com' },
            password: { type: 'string', example: 'admin123' },
            phone: { type: 'string', example: '0987654321' },
            role: { type: 'string', enum: ['admin', 'usuario'], example: 'admin' },
          },
          required: ['name', 'lastname', 'email', 'password', 'phone'],
        },
        Product: {
          type: 'object',
          properties: {
            id: { type: 'string', example: '1000' },
            name: { type: 'string', example: 'Botellón 20L' },
            description: { type: 'string', example: 'Botellón de agua purificada' },
            price: { type: 'number', format: 'float', example: 3.5 },
            stock: { type: 'integer', example: 100 },
            image_uri: { type: 'string', example: 'assets/droplet-solid.png' },
          },
          required: ['name', 'description', 'price'],
        },
        Branch: {
          type: 'object',
          properties: {
            id: { type: 'string', example: '1' },
            name: { type: 'string', example: 'Sucursal Centro' },
            address: { type: 'string', example: 'Av. Principal 123' },
            phone: { type: 'string', example: '022345678' },
            photo_uri: { type: 'string', example: 'assets/location_home.png' },
            latitude: { type: 'number', format: 'float', example: -0.180653 },
            longitude: { type: 'number', format: 'float', example: -78.467838 },
          },
          required: ['name', 'address', 'phone'],
        },
        LoginRequest: {
          type: 'object',
          properties: {
            email: { type: 'string', example: 'admin@aquanova.com' },
            password: { type: 'string', example: 'admin123' },
          },
          required: ['email', 'password'],
        },
        LoginResponse: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: true },
            message: { type: 'string', example: 'Login exitoso' },
            data: { $ref: '#/components/schemas/User' },
            token: { type: 'string', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' },
          },
        },
        ApiResponse: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            message: { type: 'string' },
            data: { type: 'object' },
          },
        },
        Error: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: false },
            message: { type: 'string', example: 'Error en la operación' },
          },
        },
      },
    },
    tags: [
      {
        name: 'Autenticación',
        description: 'Endpoints para login y registro',
      },
      {
        name: 'Usuarios',
        description: 'Gestión de usuarios (solo para administradores)',
      },
      {
        name: 'Productos',
        description: 'Gestión de productos',
      },
      {
        name: 'Sucursales',
        description: 'Gestión de sucursales',
      },
    ],
  },
  apis: ['./swagger/endpoints.js', './swagger/paths.js', './routes/*.js'],
};

export const swaggerSpecs = swaggerJsdoc(swaggerOptions);
