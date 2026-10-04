import { Platform } from 'react-native';
import { API_BASE_URL, API_CONFIG } from '../config/api.config';

export const DebugHelper = {
  logConnectionInfo: () => {
    console.log('\n📱 ===== DEBUG INFO =====');
    console.log('Platform:', Platform.OS);
    console.log('API Base URL:', API_BASE_URL);
    console.log('API Config:');
    console.log('  - WEB_URL:', API_CONFIG.WEB_URL);
    console.log('  - ANDROID_URL:', API_CONFIG.ANDROID_URL);
    console.log('  - IOS_URL:', API_CONFIG.IOS_URL);
    console.log('========================\n');
  },

  testApiConnection: async () => {
    try {
      console.log('🔌 Testando conexión a API...');
      const response = await fetch(`${API_BASE_URL}`);
      const data = await response.json();
      console.log('✅ Conexión exitosa:', data);
      return true;
    } catch (error: any) {
      console.error('❌ Error de conexión:', error.message);
      return false;
    }
  },

  instructions: () => {
    console.log(`
🔧 PASOS PARA RESOLVER EL PROBLEMA:

1. OBTÉN TU IP LOCAL:
   - Windows: Abre Terminal y ejecuta: ipconfig
   - Busca "IPv4 Address" (formato: 192.168.x.x)
   - COPIA esa IP

2. ACTUALIZA LA IP EN EL PROYECTO:
   - Archivo: src/config/api.config.ts
   - Línea: const LOCAL_IP = '192.168.1.7';
   - REEMPLAZA '192.168.1.7' con tu IP real

3. ASEGÚRATE DE QUE EL BACKEND ESTÉ CORRIENDO:
   - cd backend
   - npm start
   - Deberías ver: "Servidor corriendo en puerto 3000"

4. EN EXPO GO CON TÚNEL:
   - Abre la app
   - Verifica que ves los logs con 📡 y el URL que se usa
   - Si ves "❌ Error de conexión", la IP es incorrecta

5. VERIFICA DESDE OTRO DISPOSITIVO:
   - Abre: http://TU_IP:3000 en el navegador
   - Si ves JSON con "success": true, la conexión está bien
    `);
  },
};

// Debug automático en desarrollo
if (__DEV__) {
  console.log('🚀 Iniciando Aquanova en modo desarrollo...');
  DebugHelper.logConnectionInfo();
}
