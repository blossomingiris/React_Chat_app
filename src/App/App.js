import { Routes, Route } from 'react-router-dom'
import { UserAuthContextProvider } from '../contexts/UserAuthContext'
import { ProtectedRoute } from '../other/ProtectedRouter'
import Register from '../components/Register'
import Chats from '../components/Chats'
import Login from '../components/Login'

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='login' element={<Login />} />

        <Route
          path='/chats'
          element={
            <ProtectedRoute>
              <Chats />
            </ProtectedRoute>
          }
        />
      </Routes>
    </UserAuthContextProvider>
  )
}

export default App
