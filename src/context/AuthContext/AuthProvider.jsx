/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

// google provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user with email, password
    const createUserWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // create user with google
    const createUserWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // sing in with email
    const signInWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign out user
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // user ovserver
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUsers(currentUser);
            setLoading(true);
            console.log(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    // auth functions
    const authInfo = {
        users,
        loading,
        createUserWithEmail,
        createUserWithGoogle,
        signOutUser,
        signInWithEmail
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;