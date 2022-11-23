import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

export const ProtectedRoute = ({ children }) => {
  const { currentUser } = useUserAuth()
  if (!currentUser) {
    // if user is not authenticated navigate to home page
    return <Navigate to='/' />
  }
  return children
}
