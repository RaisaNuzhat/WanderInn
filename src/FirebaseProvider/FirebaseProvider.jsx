/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { onAuthStateChanged } from "firebase/auth";
export const AuthContext = createContext(null);

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
    const allvalues = {
        createUser,
        signinUser
    }
    return (
       
        <AuthContext.Provider value={allvalues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;
