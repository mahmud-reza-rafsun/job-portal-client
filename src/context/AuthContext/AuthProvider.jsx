/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import axios from 'axios';

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
    // forgot password
    const resetUserPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
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
            console.log(currentUser?.email);
            if(currentUser?.email){
                const user = {email: currentUser.email};

                axios.post('https://job-portal-server-de.vercel.app/jwt', user, {withCredentials: true})
                .then(res => {
                    console.log('login token',res.data)
                    setLoading(true)
                });
            }
            else{
                axios.post('https://job-portal-server-de.vercel.app/logout',{},{
                    withCredentials: true
                })
                .then(res => {
                    console.log('logout',res.data)
                    setLoading(true);
                });
            }
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
        signInWithEmail,
        resetUserPassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;