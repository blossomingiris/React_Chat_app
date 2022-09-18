import { useContext } from 'react'
import { userAuthContext } from '../../context/UserAuthContext'
import profileImg from '.././../assets/profile.png'
import Logout from '../authentication/Logout'

function Navbar() {
  const { currentUser } = useContext(userAuthContext)

  return (
    <div className='flex h-[70px] bg-stone-800 items-center p-5 text-sm justify-between gap-1'>
      <span className='uppercase text-transparent bg-clip-text text-base bg-gradient-to-br from-purple-500 to-pink-500 font-bold mr-3'>
        Messages
      </span>
      <div className='flex items-center'>
        {' '}
        <img
          src={currentUser.photoURL || profileImg}
          alt='avatar'
          className='h-[30px] w-[30px] rounded-full bg-grey-100 object-cover'
        />
        <p className='text-white text-[14px] ml-2 capitalize'>
          {currentUser.displayName}
        </p>
      </div>

      <Logout />
    </div>
  )
}

export default Navbar
