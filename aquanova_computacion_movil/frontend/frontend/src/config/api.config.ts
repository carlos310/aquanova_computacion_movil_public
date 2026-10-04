//
// CONFIGURACIÓN DE API POR AMBIENTE
//

import { Platform } from 'react-native';

// Detectar si estamos en desarrollo web o app nativa
const isWeb = Platform.OS === 'web';
const isAndroid = Platform.OS === 'android';

// ===== CONFIGURACIÓN DE CONEXIÓN =====
// Para desarrollo local: usa la IP de tu máquina
const LOCAL_IP = '10.9.203.17'; // IP en red Uniminuto

// Para Uniminuto o redes externas: usa ngrok
// 1. Instala ngrok: https://ngrok.com/download
// 2. En terminal: ngrok http 3000
// 3. Copia la URL https de ngrok (ej: https://abc123.ngrok.io)
// 4. Reemplaza NGROK_URL con tu URL y cambia USE_NGROK a true
const USE_NGROK = false; // Cambiar solo si usas ngrok
const NGROK_URL = 'https://tu-ngrok-url.ngrok.io/api';

export const API_CONFIG = {
  // Para WEB (Expo web en localhost:8081)
  WEB_URL: 'http://localhost:3000/api',

  // Para ANDROID (Emulador/Dispositivo físico)
  ANDROID_URL: USE_NGROK
    ? NGROK_URL
    : `http://${LOCAL_IP}:3000/api`,

  // Para iOS (similar a Android)
  IOS_URL: USE_NGROK
    ? NGROK_URL
    : `http://${LOCAL_IP}:3000/api`,

  // Obtener URL base según el ambiente
  getBaseURL: () => {
    let url: string;

    if (isWeb) {
      url = API_CONFIG.WEB_URL;
    } else if (isAndroid) {
      url = API_CONFIG.ANDROID_URL;
    } else {
      url = API_CONFIG.IOS_URL;
    }

    // Log para debugging
    if (__DEV__) {
      console.log(`🔗 API URL (${Platform.OS}):`, url);
      if (USE_NGROK) {
        console.log('🌐 Usando conexión ngrok');
      }
    }

    return url;
  },
};

export const API_BASE_URL = API_CONFIG.getBaseURL();
