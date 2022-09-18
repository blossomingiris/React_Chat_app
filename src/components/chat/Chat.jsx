import { useState, useEffect, useRef } from 'react'
import { db } from '../../firebase'
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore'
import Message from './Message'
import SendMessage from './SendMessage'
import Navbar from './Navbar'

function Chat() {
  const [messages, setMessages] = useState([])
  const scroll = useRef(null)

  //fetch messages from db
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = []
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id })
      })
      setMessages(messages)
    })
    return () => unsubscribe()
  }, [])

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-[#feac5e] via-[#c779d0] to-[#4BC0C8]'>
      <div className='bg-gray-100 h-[90%] relative w-[60%]'>
        <Navbar />
        <div
          className='msgs flex flex-col ml-[10px] h-[80%]
					overflow-x-scroll'
        >
          {messages &&
            messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
        </div>
        <SendMessage scroll={scroll} />
        <div ref={scroll}></div>
      </div>
    </div>
  )
}

export default Chat
