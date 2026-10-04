import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../../../domain/entities/User';

const SESSION_KEY = 'aquanova.session.user';

export const LocalStorage = {
  async saveUser(user: User): Promise<void> {
    await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(user));
  },
  async getUser(): Promise<User | null> {
    const raw = await AsyncStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  },
  async removeUser(): Promise<void> {
    await AsyncStorage.removeItem(SESSION_KEY);
  },
};
