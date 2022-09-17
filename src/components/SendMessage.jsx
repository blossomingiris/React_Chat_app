// import { useState } from 'react'
// import { auth, db } from '.././firebase'
// import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

// function SendMessage({ scroll }) {
//   const [input, setInput] = useState('')

//   const sendMessage = async (e) => {
//     e.preventDefault()

//     if (input === '') {
//       alert('Please enter a valid message')
//       return
//     }
//     const { uid, displayName, photoURL } = auth.currentUser
//     await addDoc(collection(db, 'messages'), {
//       text: input,
//       name: displayName,
//       photoURL,
//       uid,
//       timestamp: serverTimestamp(),
//     })
//     setInput('')
//     scroll.current.scrollIntoView({ behavior: 'smooth' })
//   }

//   return (
//     <form
//       className='h-14 w-full flex text-xl absolute bottom-0'
//       onSubmit={sendMessage}
//     >
//       <input
//         type='text'
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         className='w-full text-xl p-3 bg-gray-900 text-white outline-none border-none'
//         placeholder='Enter your message'
//       />
//       <button type='submit' className='w-[15%] bg-green-500'>
//         Send
//       </button>
//     </form>
//   )
// }

import React from 'react'

function SendMessage() {
  return (
    <div className='input flex items-center justify-between h-[60px] bg-stone-200 p-2'>
      <input
        type='text'
        placeholder='Type message..'
        className='send bg-stone-200 w-[100%] text-[0.75em] border-none focus:outline-0 '
      />
      <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg text-[0.75em] px-3.5 py-1.5 text-center transition duration-150 ease-in-out'>
        Send
      </button>
    </div>
  )
}

export default SendMessage
