import { useNavigate } from 'react-router'
import { useUserAuth } from '../../context/UserAuthContext'
import { MdLogout } from 'react-icons/md'

function Logout() {
  const { logOut } = useUserAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <button
      className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg text-[0.75em] p-2 text-center transition duration-150 ease-in-out '
      onClick={handleLogout}
    >
      <MdLogout size='1rem' />
    </button>
  )
}

export default Logout
