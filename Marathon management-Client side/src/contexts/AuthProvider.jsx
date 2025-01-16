import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../config/firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import {  GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { LoadingContext } from './LoadingProvider';


const googleProvider = new GoogleAuthProvider();



export const AuthContext = createContext();

const AuthProvider = ( {children} ) => {
  const [ user, setUser ] = useState(null);

  const { setLoading } = useContext(LoadingContext);

  // firebase functions 
  const createNewUser = async (email, password) => {
    setLoading(true);
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  const updateUserProfile = async (updatedData) => {
    return await updateProfile(auth.currentUser, updatedData);
  }

  const signOutUser = async () => {
    setLoading(true);
    return await signOut(auth);
  }

  const signInUser = async (email, password) => {
    setLoading(true);
    return await signInWithEmailAndPassword(auth, email, password);
  }

  const signInWithGoogle = async () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
     setUser(currentUser);
     setLoading(false);
   })
   return () => {
     unsubscribe();
   };
  }, [])


  // jei value or function gula share korte chacchi -> object banaye share korbo
  const authInfo = {
    user,
    setUser,
    createNewUser,
    updateUserProfile,
    signOutUser,
    signInUser,
    signInWithGoogle,
    
  }
  

  return (
    <div>
      <AuthContext.Provider value={ authInfo }>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;