import { API_BASE_URL } from '../config/api.config';

export const getAbsoluteImageUrl = (imageUri: string | undefined): string | undefined => {
  if (!imageUri) return undefined;

  // Si ya es URL absoluta, devolverla tal cual
  if (imageUri.startsWith('http://') || imageUri.startsWith('https://')) {
    return imageUri;
  }

  // Si es relativa, construir URL absoluta
  if (imageUri.startsWith('/assets/')) {
    // API_BASE_URL = "http://192.168.1.7:3000/api"
    // Necesitamos "http://192.168.1.7:3000/assets/..."
    const baseUrl = API_BASE_URL.replace('/api', '');
    return `${baseUrl}${imageUri}`;
  }

  // Fallback: devolver tal cual
  return imageUri;
};
