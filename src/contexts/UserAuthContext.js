import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { auth } from '../firebase'

export const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({})

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      console.log(user)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <userAuthContext.Provider
      value={{ user, googleSignIn, facebookSignIn, logOut }}
    >
      {children}
    </userAuthContext.Provider>
  )
}

export function useUserAuth() {
  return useContext(userAuthContext)
}
