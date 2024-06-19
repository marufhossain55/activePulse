import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Children, createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     console.log('current user', currentUser);
  //   });
  //   return () => {
  //     return unsubscribe();
  //   };
  // }, []);

  const authInfo = { user, loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
