import { User } from '../../entities/User';
import { LocalStorage } from '../../../data/sources/local/LocalStorage';

export const GetUserLocal = (): Promise<User | null> => {
  return LocalStorage.getUser();
};
