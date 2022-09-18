import { auth } from '../../firebase'

import React, { useEffect, useRef } from 'react'
import profileImg from '.././../assets/profile.png'

const style = {
  message: `relative flex items-center text-[0.75em] shadow-xl m-5 py-2 rounded-tl-full rounded-tr-full m-width-[80%]`,
  name: `absolute mt-[-3.3rem] text-gray-400 text-[0.85em] w-[300px] capitalize`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full pr-3`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full pl-3`,
  photoProfile: `h-[30px] w-[30px] rounded-full bg-grey-100 object-cover mx-1`,
}

function Message({ message }) {
  const messageClass =
    message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`

  //scroll to last message
  const ref = useRef()

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }, [message])

  return (
    <div>
      <div ref={ref} className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{message.name}</p>
        <p>{message.text}</p>
        <img
          src={message.photoURL || profileImg}
          alt='avatar'
          className={`${style.photoProfile}`}
        />
      </div>
    </div>
  )
}

export default Message
