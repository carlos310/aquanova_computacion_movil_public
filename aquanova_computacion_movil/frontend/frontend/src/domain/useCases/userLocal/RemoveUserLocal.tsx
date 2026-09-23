import { LocalStorage } from '../../../data/sources/local/LocalStorage';

export const RemoveUserLocal = (): Promise<void> => {
  return LocalStorage.removeUser();
};
