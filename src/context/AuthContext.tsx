import React, { useState, createContext } from 'react';

interface AuthContextProps {
  user: object | null;
  setUser: React.Dispatch<React.SetStateAction<{}>>;
}
export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

interface ProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: ProviderProps): React.ReactNode => {
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
