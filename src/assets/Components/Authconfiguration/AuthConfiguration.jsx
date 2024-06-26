/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../../../firebase.config";

export const AuthContext = createContext(null);
const AuthConfiguration = ({children}) => {
    const auth = getAuth(app);
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
  const gitHubprovider = new GithubAuthProvider();

  const GoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
  };

  const GitHubSignIn = () => {
    return signInWithPopup(auth, gitHubprovider)
  };

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signUpUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
            setLoading(false)
            console.log('Current User: ',currentUser)
        })
        return () =>{
            unSubscribe();
        } ;
    },[])

    const authInfo = {GitHubSignIn,GoogleSignIn,setUser,user,loading,createUser,signUpUser,logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthConfiguration; 