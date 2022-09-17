import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyA8pCRYpYtyGW9oVfccyWjCF5IBnU7Uf94',
  authDomain: 'messages-b4e24.firebaseapp.com',
  projectId: 'messages-b4e24',
  storageBucket: 'messages-b4e24.appspot.com',
  messagingSenderId: '1014973854074',
  appId: '1:1014973854074:web:490dd27a0361fc713866c3',
  measurementId: 'G-XC674XTGS3',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage()
