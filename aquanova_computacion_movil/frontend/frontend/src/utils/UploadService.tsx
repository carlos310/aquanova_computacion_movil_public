import { SyncService } from './SyncService';
import { API_BASE_URL } from '../config/api.config';
import { Platform } from 'react-native';

const getMimeType = (fileName: string): string => {
  const ext = fileName.toLowerCase().split('.').pop();
  const mimeTypes: { [key: string]: string } = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    webp: 'image/webp',
  };
  return mimeTypes[ext || ''] || 'image/jpeg';
};

export const UploadService = {
  async uploadImage(imageUri: string): Promise<string> {
    try {
      if (!imageUri || imageUri.startsWith('http')) {
        return imageUri;
      }

      console.log(' Iniciando upload de imagen:', imageUri);
      console.log(' Platform:', Platform.OS);

      const fileName = imageUri.split('/').pop() || 'image.jpg';
      const mimeType = getMimeType(fileName);
      const token = await SyncService.getToken();
      const uploadUrl = `${API_BASE_URL}/upload/image`;

      console.log(' URL de upload:', uploadUrl);
      console.log(' Tipo MIME detectado:', mimeType);

      // Leer el archivo como Blob (funciona en web y React Native)
      console.log(' Leyendo archivo como Blob...');
      const response = await fetch(imageUri);
      if (!response.ok) throw new Error('No se pudo leer la imagen');

      const blob = await response.blob();
      console.log(' Blob creado:', blob.size, 'bytes');

      // Crear FormData y agregar el blob
      const formData = new FormData();
      console.log(' Agregando blob a FormData...');
      formData.append('image', blob, fileName);

      console.log(' Enviando archivo al servidor...');
      const uploadResponse = await fetch(uploadUrl, {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(' Respuesta del servidor:', uploadResponse.status);

      if (!uploadResponse.ok) {
        const errorText = await uploadResponse.text();
        console.error(' Error en respuesta:', errorText);
        try {
          const error = JSON.parse(errorText);
          throw new Error(error.message || 'Error al subir imagen');
        } catch {
          throw new Error(errorText || 'Error al subir imagen');
        }
      }

      const result = await uploadResponse.json();
      console.log(' Respuesta exitosa:', result);
      const imageUrl = result.data.url || result.data.imageUrl;
      console.log(' Imagen subida:', imageUrl);
      return imageUrl;
    } catch (error: any) {
      console.error('Upload error:', error);
      throw new Error(error.message || 'Error al subir la imagen');
    }
  },
};
