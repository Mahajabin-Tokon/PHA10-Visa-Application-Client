import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [emailReference, setEmailReference] = useState("");
  const [isDark, setIsDark] = useState(false);
  const provider = new GoogleAuthProvider();
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleGoogleLogin = (email, password) => {
    return signInWithPopup(auth, provider);
  };
  const manageProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  // const resetPass = (givenEmail) => {
  //   return sendPasswordResetEmail(auth, givenEmail);
  // };
  const handleLogout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const authInfo = {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    manageProfile,
    handleLogout,
    user,
    loading,
    setUser,
    emailReference,
    setEmailReference,
    isDark,
    setIsDark,
  };

  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
