# 🌐 Configuración de ngrok para Aquanova

Si estás intentando conectar desde un celular en la **red de Uniminuto** u otra red externa, necesitas usar ngrok.

## Instalación rápida

### Windows
1. Descarga ngrok desde: https://ngrok.com/download
2. Extrae el archivo `ngrok.exe` a una carpeta
3. Abre PowerShell en esa carpeta y ejecuta:
   ```powershell
   .\ngrok http 3000
   ```

### Mac/Linux
```bash
# Instala con brew (Mac)
brew install ngrok

# O descarga manualmente desde https://ngrok.com/download
# Luego ejecuta:
ngrok http 3000
```

---

## Pasos para conectar tu celular

### 1️⃣ Inicia el backend
```bash
cd aquanova_computacion_movil/backend
npm start
# Verifica que esté corriendo en puerto 3000
```

### 2️⃣ Inicia ngrok en otra terminal
```powershell
# Windows
.\start-ngrok.ps1

# O manualmente:
ngrok http 3000
```

Verás algo como:
```
Forwarding    https://abc123.ngrok.io -> http://localhost:3000
```

### 3️⃣ Actualiza la configuración de la app

Abre este archivo:
```
aquanova_computacion_movil/frontend/frontend/src/config/api.config.ts
```

Busca estas líneas y actualiza:
```typescript
const USE_NGROK = true;  // ← Cambia false a true
const NGROK_URL = 'https://abc123.ngrok.io/api'; // ← Reemplaza con tu URL
```

### 4️⃣ Reinicia la app en el celular
- Si usas Expo Go: presiona R para recargar
- Si es una build: reinstala la app

### 5️⃣ Prueba el login
Ahora el celular debería conectar correctamente desde cualquier red.

---

## ⚠️ Importantísimo

- **Mantén ngrok corriendo** mientras uses la app (no cierres la ventana)
- Si ngrok se desconecta, obtendrás errores de conexión
- La URL de ngrok **cambia cada vez** que reiniciar ngrok (a menos que pagues por ngrok pro)

---

## Troubleshooting

### "No se conecta"
- Verifica que ngrok esté corriendo
- Copia la URL correcta (debe comenzar con `https://`)
- Reinicia la app en el celular (R en Expo Go)

### "Cambiar de vuelta a conexión local"
Si quieres volver a tu red local:
```typescript
const USE_NGROK = false;
const LOCAL_IP = '192.168.X.X'; // Tu IP real
```

---

## URLs útiles
- Documentación ngrok: https://ngrok.com/docs
- Descarga ngrok: https://ngrok.com/download
- Ver estadísticas ngrok: http://localhost:4040 (mientras está corriendo)

