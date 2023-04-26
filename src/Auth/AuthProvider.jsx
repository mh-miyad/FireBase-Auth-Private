import React, { createContext, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/firebase.init'
 export const UserProvider = createContext(null);
const AuthProvider = ({ children }) => {
  
const auth = getAuth(app);


const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth ,email,password)
}
const login = (email ,password)=>{
    return signInWithEmailAndPassword( auth ,email ,password)
}


 const logOut = ()=>{
     return signOut(auth)
 }

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth ,userChange =>{
  console.log(' hello  user Change ' , userChange);
})  
 return ()=>{
    unSubscribe()
 }

}, [])

 const authProvider = {
    createUser,
    login,
    logOut
 }
  return <UserProvider.Provider value={authProvider} >
    {children}
    </UserProvider.Provider>;
};

export default AuthProvider;
