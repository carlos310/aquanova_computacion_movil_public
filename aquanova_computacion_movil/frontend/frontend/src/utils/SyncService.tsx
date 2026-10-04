import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '../config/api.config';

const TOKEN_KEY = 'aquanova.auth.token';

// 
// SERVICIO DE SINCRONIZACIÓN Y TOKENS
// 

export const SyncService = {
  // Obtener token actual
  async getToken(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(TOKEN_KEY);
    } catch (error) {
      console.error('Error al obtener token:', error);
      return null;
    }
  },

  // Guardar token
  async setToken(token: string): Promise<void> {
    try {
      await AsyncStorage.setItem(TOKEN_KEY, token);
    } catch (error) {
      console.error('Error al guardar token:', error);
    }
  },

  // Limpiar token
  async clearToken(): Promise<void> {
    try {
      await AsyncStorage.removeItem(TOKEN_KEY);
    } catch (error) {
      console.error('Error al eliminar token:', error);
    }
  },

  // Verificar si hay token válido
  async hasToken(): Promise<boolean> {
    const token = await this.getToken();
    return !!token;
  },

  // Headers con autorización
  async getHeaders(): Promise<Record<string, string>> {
    const token = await this.getToken();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
  },

  // Hacer request con manejo de errores y tokens
  async request(
    endpoint: string,
    options: {
      method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
      body?: any;
    } = {}
  ): Promise<any> {
    try {
      const headers = await this.getHeaders();
      const url = `${API_BASE_URL}${endpoint}`;
      const method = options.method || 'GET';

      if (__DEV__) {
        console.log(`📡 ${method} ${url}`);
        if (options.body) {
          console.log('📤 Body:', options.body);
        }
      }

      const config: RequestInit = {
        method,
        headers,
      };

      if (options.body) {
        config.body = JSON.stringify(options.body);
      }

      const response = await fetch(url, config);

      if (__DEV__) {
        console.log(`✅ Response ${response.status}:`, url);
      }

      // Si es 401 (no autorizado), limpiar token
      if (response.status === 401) {
        await this.clearToken();
        throw new Error('Sesión expirada. Por favor, vuelve a iniciar sesión.');
      }

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        console.error(`❌ Error ${response.status}:`, error);
        throw new Error(error.message || `Error: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      console.error(`❌ Error en request ${endpoint}:`, error.message || error);
      throw error;
    }
  },

  // Obtener todos los recursos
  async getAll(endpoint: string): Promise<any[]> {
    try {
      const response = await this.request(endpoint);
      return response.data || [];
    } catch (error) {
      console.error(`Error al obtener datos de ${endpoint}:`, error);
      return [];
    }
  },

  // Obtener un recurso por ID
  async getById(endpoint: string, id: string): Promise<any> {
    try {
      const response = await this.request(`${endpoint}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener ${endpoint}/${id}:`, error);
      return null;
    }
  },

  // Crear recurso
  async create(endpoint: string, data: any): Promise<any> {
    try {
      const response = await this.request(endpoint, {
        method: 'POST',
        body: data,
      });
      return response.data;
    } catch (error) {
      console.error(`Error al crear en ${endpoint}:`, error);
      throw error;
    }
  },

  // Actualizar recurso
  async update(endpoint: string, id: string, data: any): Promise<any> {
    try {
      const response = await this.request(`${endpoint}/${id}`, {
        method: 'PUT',
        body: data,
      });
      return response.data;
    } catch (error) {
      console.error(`Error al actualizar ${endpoint}/${id}:`, error);
      throw error;
    }
  },

  // Eliminar recurso
  async delete(endpoint: string, id: string): Promise<void> {
    try {
      await this.request(`${endpoint}/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error(`Error al eliminar ${endpoint}/${id}:`, error);
      throw error;
    }
  },
};
