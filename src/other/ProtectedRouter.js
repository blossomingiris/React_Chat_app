import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

export const ProtectedRoute = ({ children }) => {
  const { currentUser } = useUserAuth()
  if (!currentUser) {
    // user is not authenticated
    return <Navigate to='/' />
  }
  return children
}
