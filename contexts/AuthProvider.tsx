import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Text } from 'react-native';

export const AuthContext = createContext<{ user: User | null }>({ user: null });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      if (initializing) setInitializing(false);
    });

    return unsubscribe;
  }, []);

  if (initializing) return <Text>Loading...</Text>;

  return (
    <AuthContext.Provider value={{ user }}>
      { children }
    </AuthContext.Provider>
  );
};