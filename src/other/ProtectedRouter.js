import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../contexts/UserAuthContext'

export const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth()
  if (!user) {
    // user is not authenticated
    return <Navigate to='/' />
  }
  return children
}
