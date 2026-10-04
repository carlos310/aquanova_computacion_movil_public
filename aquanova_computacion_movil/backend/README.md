# 🌊 Aquanova Backend API

Backend API REST para el sistema de gestión de agua potable Aquanova, desarrollado con **Node.js** y **Express**, conectado a **MySQL**.

## 📋 Tabla de Contenidos

- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Iniciar el servidor](#-iniciar-el-servidor)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Endpoints API](#-endpoints-api)
- [Variables de Entorno](#-variables-de-entorno)

## 🚀 Instalación

### Requisitos previos

- Node.js (v14 o superior)
- npm (v6 o superior)
- MySQL Server (v5.7 o superior)

### Pasos de instalación

1. **Clonar o descargar el proyecto** (si no lo has hecho)

2. **Navegar a la carpeta backend**
```bash
cd aquanova_computacion_movil/backend
```

3. **Instalar dependencias**
```bash
npm install
```

Esto instalará:
- **express** - Framework web
- **mysql2** - Driver de MySQL
- **dotenv** - Manejo de variables de entorno
- **cors** - Permitir solicitudes entre dominios
- **body-parser** - Parsear JSON
- **nodemon** (dev) - Reiniciar servidor automáticamente

## ⚙️ Configuración

### 1. Crear archivo `.env`

El archivo `.env` ya está creado con valores por defecto. Modifica según tu configuración de MySQL:

```env
# Variables de Entorno - Aquanova Backend

# CONFIGURACIÓN DEL SERVIDOR
PORT=3000
NODE_ENV=development

# CONFIGURACIÓN DE BASE DE DATOS MYSQL
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=aquanova_movil
DB_PORT=3306

# CONFIGURACIÓN DE APLICACIÓN
API_URL=http://localhost:3000
CORS_ORIGIN=*
```

**Variables clave:**
- `DB_HOST` - Host de MySQL (localhost por defecto)
- `DB_USER` - Usuario de MySQL (root por defecto)
- `DB_PASSWORD` - Contraseña de MySQL (vacía por defecto)
- `DB_NAME` - Nombre de la base de datos (aquanova_movil)
- `PORT` - Puerto donde corre la API (3000)

### 2. Crear la base de datos

Ejecuta el SQL query proporcionado en MySQL Workbench para crear:
- Tabla `users`
- Tabla `products`
- Tabla `branches`

## 🏃 Iniciar el servidor

### Modo desarrollo (con Nodemon)
```bash
npm run dev
```
El servidor se reiniciará automáticamente cuando cambies archivos.

### Modo producción
```bash
npm start
```

**Salida esperada:**
```
╔════════════════════════════════════════════════════════╗
║         🌊 AQUANOVA BACKEND API - INICIADO 🌊          ║
╚════════════════════════════════════════════════════════╝

✅ Servidor corriendo en: http://localhost:3000
📝 Ambiente: development
🗄️  Base de datos: aquanova_movil en localhost:3306

📚 ENDPOINTS DISPONIBLES:
  ├─ GET    /                          (Estado API)
  ├─ GET    /api/users                 (Listar usuarios)
  ...
```

## 📁 Estructura del proyecto

```
backend/
├── database/
│   └── connection.js          # Conexión a MySQL con pool de conexiones
├── models/
│   ├── User.js               # Modelo de usuarios
│   ├── Product.js            # Modelo de productos
│   └── Branch.js             # Modelo de sucursales
├── controllers/
│   ├── userController.js     # Controlador de usuarios
│   ├── productController.js  # Controlador de productos
│   └── branchController.js   # Controlador de sucursales
├── routes/
│   ├── userRoutes.js         # Rutas de usuarios
│   ├── productRoutes.js      # Rutas de productos
│   └── branchRoutes.js       # Rutas de sucursales
├── server.js                 # Servidor principal
├── package.json              # Dependencias del proyecto
├── .env                      # Variables de entorno
└── README.md                 # Este archivo
```

### Descripción de capas

**database/** - Capa de conexión
- Gestiona la conexión a MySQL con pool de conexiones

**models/** - Capa de acceso a datos
- Define operaciones CRUD para cada entidad
- Ejecuta queries a la base de datos

**controllers/** - Capa de lógica de negocio
- Procesa solicitudes HTTP
- Valida datos
- Llama a modelos
- Retorna respuestas

**routes/** - Capa de enrutamiento
- Define endpoints de la API
- Asocia rutas con controladores

## 📡 Endpoints API

### Status de la API

```
GET /
```
Verifica que la API está funcionando.

**Respuesta:**
```json
{
  "success": true,
  "message": "API Aquanova funcionando correctamente",
  "version": "1.0.0",
  "timestamp": "2026-09-28T10:30:00Z"
}
```

### 👥 USUARIOS

#### Listar usuarios
```
GET /api/users
```

#### Crear usuario
```
POST /api/users
Content-Type: application/json

{
  "id": "2",
  "name": "Juan",
  "lastname": "Pérez",
  "email": "juan@aquanova.com",
  "password": "password123",
  "phone": "0912345678",
  "role": "usuario"
}
```

#### Obtener usuario por ID
```
GET /api/users/1
```

#### Actualizar usuario
```
PUT /api/users/1
Content-Type: application/json

{
  "name": "Juan",
  "lastname": "García",
  "email": "juan@example.com",
  "password": "newpassword",
  "phone": "0987654321",
  "role": "admin"
}
```

#### Eliminar usuario
```
DELETE /api/users/1
```

#### Obtener usuarios por rol
```
GET /api/users/role?role=admin
```

### 📦 PRODUCTOS

#### Listar productos
```
GET /api/products
```

#### Crear producto
```
POST /api/products
Content-Type: application/json

{
  "id": "1004",
  "name": "Botella 3L",
  "description": "Botella de agua purificada de 3 litros",
  "price": 2.00,
  "stock": 100,
  "image_uri": "assets/droplet-solid.png"
}
```

#### Obtener producto por ID
```
GET /api/products/1000
```

#### Actualizar producto
```
PUT /api/products/1000
Content-Type: application/json

{
  "name": "Botellón 20L Eco",
  "description": "Botellón ecológico de 20 litros",
  "price": 4.50,
  "stock": 80,
  "image_uri": "assets/droplet-solid.png"
}
```

#### Eliminar producto
```
DELETE /api/products/1000
```

#### Obtener productos disponibles
```
GET /api/products/available
```

#### Buscar productos
```
GET /api/products/search?query=botella
```

#### Actualizar stock
```
PUT /api/products/1000/stock
Content-Type: application/json

{
  "quantity": 10,
  "action": "increase"
}
```
`action`: "increase" o "decrease"

### 🏪 SUCURSALES

#### Listar sucursales
```
GET /api/branches
```

#### Crear sucursal
```
POST /api/branches
Content-Type: application/json

{
  "id": "4",
  "name": "Sucursal Este",
  "address": "Calle Principal 999",
  "phone": "023456789",
  "photo_uri": "assets/location_home.png",
  "latitude": -0.25000000,
  "longitude": -78.50000000
}
```

#### Obtener sucursal por ID
```
GET /api/branches/1
```

#### Actualizar sucursal
```
PUT /api/branches/1
Content-Type: application/json

{
  "name": "Sucursal Centro Mejorada",
  "address": "Av. Principal 150",
  "phone": "022345679",
  "photo_uri": "assets/location_home.png",
  "latitude": -0.18065300,
  "longitude": -78.46783800
}
```

#### Eliminar sucursal
```
DELETE /api/branches/1
```

#### Obtener sucursales cercanas
```
GET /api/branches/nearby?latitude=-0.18065300&longitude=-78.46783800&radius=5
```

#### Buscar sucursales
```
GET /api/branches/search?query=norte
```

#### Actualizar ubicación GPS
```
PUT /api/branches/1/location
Content-Type: application/json

{
  "latitude": -0.18500000,
  "longitude": -78.47000000
}
```

## 🔒 Variables de Entorno

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| PORT | Puerto del servidor | 3000 |
| NODE_ENV | Ambiente (development/production) | development |
| DB_HOST | Host de MySQL | localhost |
| DB_USER | Usuario de MySQL | root |
| DB_PASSWORD | Contraseña de MySQL | (vacía) |
| DB_NAME | Nombre de la base de datos | aquanova_movil |
| DB_PORT | Puerto de MySQL | 3306 |
| API_URL | URL base de la API | http://localhost:3000 |
| CORS_ORIGIN | Origen permitido para CORS | * |

## 🧪 Probar la API

### Usando Postman

1. Descargar [Postman](https://www.postman.com/downloads/)
2. Crear nueva colección "Aquanova API"
3. Añadir requests para cada endpoint
4. Usar `{{BASE_URL}}` = `http://localhost:3000` como variable de entorno

### Usando curl

```bash
# GET - Listar usuarios
curl http://localhost:3000/api/users

# POST - Crear usuario
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"id":"2","name":"Juan","lastname":"Pérez","email":"juan@aquanova.com","password":"pass123","phone":"0912345678","role":"usuario"}'

# GET - Obtener producto
curl http://localhost:3000/api/products/1000

# PUT - Actualizar producto
curl -X PUT http://localhost:3000/api/products/1000 \
  -H "Content-Type: application/json" \
  -d '{"name":"Botellón 20L","description":"20 litros","price":3.50,"stock":100,"image_uri":"assets/droplet-solid.png"}'
```

## ✅ Checklist de inicio rápido

- [ ] Instalar Node.js y npm
- [ ] Instalar MySQL Server
- [ ] Crear base de datos con SQL query
- [ ] Navegar a carpeta backend
- [ ] Instalar dependencias: `npm install`
- [ ] Configurar `.env` con credenciales de MySQL
- [ ] Iniciar servidor: `npm run dev`
- [ ] Probar endpoints con Postman o curl
- [ ] Conectar frontend a `http://localhost:3000`

## 📝 Notas importantes

- El archivo `.env` no debe commitearse a git (está en `.gitignore`)
- Las contraseñas debe hashearlas en un entorno de producción
- Implementa autenticación (JWT) para endpoints sensibles
- Usa HTTPS en producción
- Configura límites de tasa (rate limiting)
- Realiza auditoría de seguridad antes de producción

## 🐛 Troubleshooting

### Error: "connect ECONNREFUSED 127.0.0.1:3306"
- Verifica que MySQL Server está corriendo
- Comprueba credenciales en `.env`

### Error: "Cannot find module 'express'"
- Ejecuta: `npm install`

### Puerto ya está en uso
- Cambia `PORT` en `.env`
- O mata el proceso: `lsof -i :3000` / `kill -9 <PID>`

## 📞 Soporte

Para más ayuda, revisa:
- Documentación de Express: https://expressjs.com
- Documentación de MySQL2: https://github.com/sidorares/node-mysql2
- Documentación de Dotenv: https://github.com/motdotla/dotenv

---

**Versión:** 1.0.0  
**Autor:** Carlos Rodriguez  
**Fecha:** Septiembre 2026
