# 📚 Documentación API con Swagger/OpenAPI

La API de Aquanova está completamente documentada con **Swagger/OpenAPI 3.0**.

## 🚀 Acceder a la documentación

Una vez que el servidor esté corriendo, abre tu navegador y ve a:

```
http://localhost:3000/api-docs
```

## ✨ Características de Swagger UI

- ✅ Visualizar todos los endpoints
- ✅ Ver esquemas de request y response
- ✅ Probar endpoints directamente desde el navegador
- ✅ Autenticación con JWT integrada
- ✅ Guardar tokens para las pruebas

## 🔐 Usar Swagger con autenticación JWT

### 1. Login primero
```bash
POST /api/auth/login
{
  "email": "admin@aquanova.com",
  "password": "admin123"
}
```

### 2. Copiar el token recibido

### 3. En Swagger UI, hacer click en el botón "Authorize"

### 4. Pegar el token en el formato: `Bearer <tu_token_aqui>`

### 5. Ahora todos los endpoints protegidos estarán autenticados

## 📋 Endpoints documentados

### 🔐 Autenticación
- `POST /api/auth/login` - Login de usuario
- `POST /api/auth/register` - Registro de nuevo usuario
- `GET /api/auth/profile` - Obtener perfil (requiere auth)

### 👥 Usuarios (Solo Admin)
- `GET /api/users` - Listar todos los usuarios
- `POST /api/users` - Crear usuario
- `GET /api/users/:id` - Obtener usuario por ID
- `PUT /api/users/:id` - Actualizar usuario
- `DELETE /api/users/:id` - Eliminar usuario

### 📦 Productos
- `GET /api/products` - Listar productos
- `POST /api/products` - Crear producto
- `GET /api/products/:id` - Obtener producto
- `PUT /api/products/:id` - Actualizar producto
- `DELETE /api/products/:id` - Eliminar producto
- `GET /api/products/available` - Productos con stock
- `GET /api/products/search?query=X` - Buscar productos

### 🏪 Sucursales
- `GET /api/branches` - Listar sucursales
- `POST /api/branches` - Crear sucursal
- `GET /api/branches/:id` - Obtener sucursal
- `PUT /api/branches/:id` - Actualizar sucursal
- `DELETE /api/branches/:id` - Eliminar sucursal
- `GET /api/branches/nearby` - Sucursales cercanas
- `GET /api/branches/search?query=X` - Buscar sucursales

## 🛠️ Archivos de configuración

- `swaggerConfig.js` - Configuración de Swagger/OpenAPI
- `paths.js` - Documentación de todos los endpoints

## 💡 Cómo está documentado

Los endpoints están documentados usando **JSDoc comentarios de Swagger** en el archivo `paths.js`. Cada endpoint incluye:

- Descripción
- Tags (categorías)
- Parámetros
- Request body con esquema
- Respuestas esperadas
- Códigos de error

## 🔄 Actualizar documentación

Si cambias un endpoint:

1. Edita `/swagger/paths.js`
2. Actualiza el comentario JSDoc del endpoint
3. Recarga la página de Swagger UI

Los cambios se reflejarán automáticamente.

## 📤 Exportar documentación

Desde Swagger UI puedes:

1. Click en el ícono del menú (hamburguesa)
2. Seleccionar "Download definition" (YAML o JSON)
3. Descargar el archivo OpenAPI

Esto es útil para compartir la API con otros desarrolladores.

## 🌍 URLs de servidor

La documentación está configurada para trabajar con:

- **Local:** `http://localhost:3000`
- **Red local:** `http://192.168.1.7:3000` (cambiar IP según tu máquina)

Edita `swaggerConfig.js` en la sección `servers` para añadir más URLs.
