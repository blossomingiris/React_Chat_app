import { useState } from 'react'
import { auth, db } from '../../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

function SendMessage({  }) {
  const [input, setInput] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault()

    if (input === '') {
      alert('Please enter some message')
      return
    }
    const { uid, displayName, photoURL } = auth.currentUser
    await addDoc(collection(db, 'messages'), {
      text: input,
      name: displayName,
      photoURL,
      uid,
      timestamp: serverTimestamp(),
    })
    setInput('')
  }

  return (
    <form className='h-10 w-full flex absolute bottom-0' onSubmit={sendMessage}>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='w-full bg-stone-200 w-[100%] text-[0.75em] border-none focus:outline-0 px-3'
        placeholder='Type your message..'
      />
      <button
        type='submit'
        className='text-white px-4 py-2.5 text-[0.75em] bg-blue-400 text-white leading-tight shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out'
      >
        Send
      </button>
    </form>
  )
}

export default SendMessage
