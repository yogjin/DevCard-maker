import firebase from '../config/firebase-config.js';
import { getAuth, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const auth = getAuth(firebase);

const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (method) => {
    let authProvider;
    switch (method) {
      case 'google':
        authProvider = googleAuthProvider;
        break;
      case 'github':
        authProvider = githubAuthProvider;
        break;
      default:
        console.error('Auth: No method');
    }
    await signInWithRedirect(auth, authProvider);

    // .then(user => setUser(user));
  };
  const logout = () => {
    //
    // setUser(null)
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
