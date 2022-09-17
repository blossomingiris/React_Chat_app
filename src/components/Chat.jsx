import React from 'react'
import Messages from './Messages'
import SendMessage from './SendMessage'

function Chat() {
  return (
    <div className='w-[400px]'>
      <div className='chatInfo flex items-center text-[0.9em] text-white h-[70px] bg-stone-700 px-5 justify-end '>
        {' '}
        <span>Jane</span>
      </div>
      <Messages />
      <SendMessage />
    </div>
  )
}

export default Chat
