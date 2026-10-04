import { User } from '../../entities/User';
import { LocalStorage } from '../../../data/sources/local/LocalStorage';

export const SaveUserLocal = (user: User): Promise<void> => {
  return LocalStorage.saveUser(user);
};
