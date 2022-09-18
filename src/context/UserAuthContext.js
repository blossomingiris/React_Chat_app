import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { auth } from '../firebase'

export const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({})
  const [loading, setLoading] = useState(true)

  //sign up chat for new user
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //log in chat
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // log out chat
  function logOut() {
    return signOut(auth)
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleAuthProvider)
  }

  function facebookSignIn() {
    const facebookAuthProvider = new FacebookAuthProvider()
    return signInWithPopup(auth, facebookAuthProvider)
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false)
      setCurrentUser(user)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <userAuthContext.Provider
      value={{
        currentUser,
        googleSignIn,
        facebookSignIn,
        logOut,
        logIn,
        signUp,
        resetPassword,
      }}
    >
      {!loading && children}
    </userAuthContext.Provider>
  )
}

export function useUserAuth() {
  return useContext(userAuthContext)
}
