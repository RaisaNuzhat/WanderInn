/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,signInWithPopup,signOut} from "firebase/auth";
import auth from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null);

//social providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebaseProvider = ({children}) => {
    const [user,setUser] = useState(null)
    console.log(user)
    //create user
    const createUser = (email, password) =>
    {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //observer
    useEffect(
        () =>
        {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                 setUser(user)
                } else {
                  // User is signed out
                  // ...
                }
              });
        }
        ,)
        //signin user
        const signinUser = (email,password) =>
        {
           return signInWithEmailAndPassword(auth, email, password)
        }
        //google login
        const signinWithGoogle = () =>
        {
            signInWithPopup(auth, googleProvider)
        }
        //github login
        const signinWithGithub = () =>
        {
            signInWithPopup(auth, githubProvider)
        }
        const logOut = () =>
        {
            signOut(auth)
        }
    const allvalues = {
        createUser,
        signinUser,
        signinWithGoogle,
        signinWithGithub,
        logOut,
        user
    }
    return (
       
        <AuthContext.Provider value={allvalues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;
