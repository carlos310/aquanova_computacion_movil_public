import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../../domain/entities/User';
import { LoginAuth } from '../../domain/useCases/auth/LoginAuth';
import { RegisterAuth } from '../../domain/useCases/auth/RegisterAuth';
import { LogoutAuth } from '../../domain/useCases/auth/LogoutAuth';
import { SaveUserLocal } from '../../domain/useCases/userLocal/SaveUserLocal';
import { GetUserLocal } from '../../domain/useCases/userLocal/GetUserLocal';
import { RemoveUserLocal } from '../../domain/useCases/userLocal/RemoveUserLocal';

interface AuthContextValue {
  user: User | null;
  isLoading: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: Omit<User, 'id' | 'role'>) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetUserLocal()
      .then(setUser)
      .finally(() => setIsLoading(false));
  }, []);

  const login = async (email: string, password: string) => {
    const loggedUser = await LoginAuth(email, password);
    await SaveUserLocal(loggedUser);
    setUser(loggedUser);
  };

  const register = async (data: Omit<User, 'id' | 'role'>) => {
    const newUser = await RegisterAuth(data);
    await SaveUserLocal(newUser);
    setUser(newUser);
  };

  const logout = async () => {
    await LogoutAuth();
    await RemoveUserLocal();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, isAdmin: user?.role === 'admin', login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
};
