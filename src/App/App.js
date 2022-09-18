import { Routes, Route } from 'react-router-dom'
import { UserAuthContextProvider } from '../context/UserAuthContext'
import { ProtectedRoute } from '../other/ProtectedRouter'
import Register from '../components/authentication/Register'
import Chat from '../components/chat/Chat'
import Login from '../components/authentication/Login'
import ForgotPassword from '../components/authentication/ForgotPassword'

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />

        <Route
          path='/chats'
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
      </Routes>
    </UserAuthContextProvider>
  )
}

export default App
