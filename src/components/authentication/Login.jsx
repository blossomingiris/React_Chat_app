import { FaGoogle, FaFacebookF } from 'react-icons/fa'
import { useNavigate, Link } from 'react-router-dom'
import { useUserAuth } from '../../context/UserAuthContext'
import { useState } from 'react'
import { db } from '../../firebase'
import { doc, setDoc } from 'firebase/firestore'

function Login() {
  const { googleSignIn } = useUserAuth()
  const { facebookSignIn } = useUserAuth()
  const { logIn } = useUserAuth()
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  //auth with Google
  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    try {
      setErrorMessage('')
      setLoading(false)
      const res = await googleSignIn()
      await setDoc(doc(db, 'users', res.user.uid), {
        uid: res.user.uid,
        displayName: res.user.displayName,
        email: res.user.email,
        photoURL: res.user.photoURL,
      })
      navigate('/chats')
    } catch (error) {
      setErrorMessage('Failed to create an account')
    }
    setLoading(true)
  }

  //auth with Facebook
  const handleFacebookSignIn = async (e) => {
    e.preventDefault()
    try {
      setErrorMessage('')
      setLoading(false)
      const res = await facebookSignIn()
      await setDoc(doc(db, 'users', res.user.uid), {
        uid: res.user.uid,
        displayName: res.user.displayName,
        email: res.user.email,
        photoURL: res.user.photoURL,
      })
      navigate('/chats')
    } catch (error) {
      setErrorMessage('Failed to create an account')
    }
    setLoading(true)
  }

  //auth with password und email

  const handleSubmit = async (e) => {
    setErrorMessage('')
    setLoading(false)
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    try {
      await logIn(email, password)
      navigate('/chats')
    } catch (error) {
      setErrorMessage('Failed to login')
    }
    setLoading(true)
  }

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-[#feac5e] via-[#c779d0] to-[#4BC0C8] ...'>
      <div className='rounded-lg shadow-lg bg-white max-w-lg '>
        <div className='flex py-5 px-10 items-center gap-3'>
          <div>
            <div className='mb-4 text-center'>
              {' '}
              <h3 className='mb-2 uppercase text-[1.5em]  font-semibold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500'>
                Messages
              </h3>
              <h3 className='text-zinc-700 text-xs'>Login</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                className='form-control block w-full px-4 py-2 mb-3 text-[16px] font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#a98ace] focus:outline-none'
                placeholder='Email address'
                required
              />

              <input
                type='password'
                className='form-control block w-full px-4 py-2 mb-3 text-[16px] font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#a98ace] focus:outline-none'
                placeholder='Password'
                required
              />

              {errorMessage && (
                <p className='text-center text-[0.65em] py-1 text-rose-600 mt-[-0.9em] mb-1'>
                  {errorMessage}
                </p>
              )}

              <button
                type='submit'
                className='inline-block px-4 py-2.5 bg-blue-600 text-white text-[0.8em] leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full'
                disabled={loading}
              >
                Sign in
              </button>
            </form>

            <p className='text-zinc-700 text-xs text-center mt-3 hover:underline'>
              <Link to='/forgot-password'>Forget your password?</Link>
            </p>

            <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
              <p className='text-center text-sm mx-4 mb-0'>OR</p>
            </div>

            <div div className='flex flex-col justify-center '>
              <button
                type='button'
                data-mdb-ripple='true'
                data-mdb-ripple-color='light'
                className='flex justify-evenly mb-2.5 align-middle px-4 py-3 bg-[#de4a39] text-white text-[0.8em] leading-tight rounded shadow-md hover:bg-[#a8372a] hover:shadow-lg focus:bg-[#a8372a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#de4a39] active:shadow-lg transition duration-150 ease-in-out'
                onClick={handleGoogleSignIn}
              >
                <FaGoogle /> <p>Sign In with Google</p>
              </button>
              <button
                type='button'
                data-mdb-ripple='true'
                data-mdb-ripple-color='light'
                className='flex justify-evenly gap-2 align-middle px-4 py-3 bg-[#3b5998] text-white text-[0.8em] leading-tight rounded shadow-md hover:bg-[#31497d] hover:shadow-lg focus:bg-[#31497d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#31497d] active:shadow-lg transition duration-150 ease-in-out'
                onClick={handleFacebookSignIn}
              >
                <FaFacebookF /> <p>Sign In with Facebook </p>
              </button>
            </div>
            <p className='text-zinc-700 text-xs text-center mt-3'>
              Don't have an account?{' '}
              <Link className='text-[#c779cf] hover:underline' to='/'>
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
