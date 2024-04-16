/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,signInWithPopup} from "firebase/auth";
import auth from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
export const AuthContext = createContext(null);

//social providers
const googleProvider = new GoogleAuthProvider();


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
        ,[])
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
    const allvalues = {
        createUser,
        signinUser,
        signinWithGoogle
    }
    return (
       
        <AuthContext.Provider value={allvalues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;
