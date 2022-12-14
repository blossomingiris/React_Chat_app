import { useState, useEffect, useRef } from 'react'
import { db } from '../../firebase'
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore'
import Message from './Message'
import SendMessage from './SendMessage'
import Navbar from './Navbar'

function Chat() {
  const [messages, setMessages] = useState([])

  //scrolling to last message in chat
  const scroll = useRef()

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
    <div className='flex items-center justify-center h-screen '>
      <div className='bg-gray-100 h-[90%] relative w-[90%] max-w-lg '>
        <Navbar />
        <div
          className='flex flex-col ml-[10px] h-[83%] overflow-x-hidden
					'
        >
          {messages &&
            messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
        </div>
        <SendMessage scroll={scroll} />
        <div ref={scroll} />
      </div>
    </div>
  )
}

export default Chat
