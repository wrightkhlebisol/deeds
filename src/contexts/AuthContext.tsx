import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { createUser, loginUser, logOutUser } from '../services/AuthService';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';

interface AuthContextType {
  createUser: typeof createUser;
  loginUser: typeof loginUser;
  logOutUser: typeof logOutUser;
  currentUser: User | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps { 
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => { 
      setCurrentUser(user);
      setLoading(false);
    });
    return subscribe;
  }, [])

  const value = {
    currentUser,
    createUser,
    loginUser,
    logOutUser,
  }
  

  return (
    <AuthContext.Provider value={value}>
      {!loading && children }
    </AuthContext.Provider>
  );
}