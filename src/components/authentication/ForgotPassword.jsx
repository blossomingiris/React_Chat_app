import { Link } from 'react-router-dom'
import { useUserAuth } from '../../context/UserAuthContext'
import { useState } from 'react'

function ForgotPassword() {
  const { resetPassword } = useUserAuth()
  const [errorMessage, setErrorMessage] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  //auth with password und email

  const handleSubmit = async (e) => {
    setErrorMessage('')
    setLoading(false)
    e.preventDefault()
    const email = e.target[0].value

    try {
      setMessage('')
      setLoading(true)
      setErrorMessage('')
      await resetPassword(email)
      setMessage('Successfully reset password. Check your email.')
    } catch (error) {
      setErrorMessage('Failed to reset password')
    }
    setLoading(true)
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='rounded-lg shadow-lg bg-white max-w-lg '>
        <div className='flex py-6 px-8 items-center gap-3'>
          <div>
            <div className='mb-4 text-center'>
              {' '}
              <h3 className='mb-2 uppercase text-[1.5em] font-semibold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500'>
                Messages
              </h3>
              <h3 className='text-zinc-700 text-sm'>Password reset</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type='email'
                className='form-control block w-full px-4 py-2 mb-3 text-[16px] font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#a98ace] focus:outline-none'
                placeholder='Email address'
                required
              />

              {errorMessage && (
                <p className='text-center text-[0.75em] pb-2 py-1 text-rose-600 mt-[-0.9em] mb-1'>
                  {errorMessage}
                </p>
              )}

              {message && (
                <p className='text-center text-[0.75em] pb-2 py-1 text-green-600 mt-[-0.9em] mb-1'>
                  {message}
                </p>
              )}

              <button
                type='submit'
                className='px-3 py-2.5 bg-blue-600 text-white text-sm leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full'
                disabled={loading}
              >
                Reset password
              </button>
            </form>

            <p className='text-zinc-700 text-xs text-center mt-3 hover:underline'>
              <Link to='/login'>Back to Log In page</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
