import { useState, useEffect, useRef } from 'react'
import Message from './Message'
import { db } from '../firebase'
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore'
import SendMessage from './SendMessage'
import Sidebar from './Sidebar'
import Chat from './Chat'

function Chats() {
  // const [messages, setMessages] = useState([])
  // const scroll = useRef()
  // useEffect(() => {
  //   const q = query(collection(db, 'messages'), orderBy('timestamp'))
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     let messages = []
  //     querySnapshot.forEach((doc) => {
  //       messages.push({ ...doc.data(), id: doc.id })
  //     })
  //     setMessages(messages)
  //   })
  //   return () => unsubscribe()
  // }, [])
  // return (
  //   <div>
  //     <div className='bg-cyan-500 h-20 flex justify-between items-center p-4'>
  //       <div className='text-white text-3xl'>Chatty</div>
  //       <LogoOut />
  //     </div>
  //     <main className='flex flex-col p-[10px]'>
  //       {messages &&
  //         messages.map((message) => (
  //           <Message key={message.id} message={message} />
  //         ))}
  //     </main>
  //     <SendMessage />
  //     <span ref={scroll}></span>
  //   </div>
  // )
  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-[#feac5e] via-[#c779d0] to-[#4BC0C8]'>
      <div className='flex justify-between bg-gray-100 h-[80%]'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Chats
