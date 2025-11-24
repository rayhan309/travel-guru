import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/Firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

//   sigin user
const siginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

// upded user frofile 
const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
    })
}

// gte user
useEffect(() => {

    const unSubCribe = onAuthStateChanged(auth, (users) => {
        setUser(users)
        setLoading(false)
    })

    return () => unSubCribe();

}, []); 

// signout user
const signOutUser = () => {
  return signOut(auth);
}


// FORGET PASSWORD
const forgetPassword = (email) =>{
  return sendPasswordResetEmail(auth, email) 
}

  const authInfo = {
    createUser,
    siginUser,
    updateUser,
    user,
    setUser,
    loading,
    signOutUser,
    forgetPassword,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
