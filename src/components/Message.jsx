import { auth } from '../firebase'

// const style = {
//   message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
//   sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
//   received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
//   avatar_left: `absolute w-5 h-5 rounded-full mx-8 my-5 float-left`,
//   avatar_right: `absolute w-5 h-5 rounded-full mx-8 my-5 float-right`,
// }

// function Message({ message }) {
//   const messageClass =
//     message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`

//   const avatarClass =
//     message.uid === auth.currentUser.uid
//       ? `${style.avatar_left}`
//       : `${style.avatar_right}`

//   return (
//     <div>
//       <div className={`${style.message} ${messageClass} `}>
//         <p className='absolute mt-[-4rem] text-gray-600 text-xs'>
//           {message.name}
//         </p>
//         <p>{message.text}</p>
//         <img src={message.photoURL} alt='avatar' className={`${avatarClass}`} />
//       </div>
//     </div>
//   )
// }

// export default Message

import React from 'react'

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
}

function Message() {
  return (
    <div className='message flex gap-1'>
      <div className='messageInfo flex flex-col'>
        <img src='' alt='' className='w-[40px] h-[40px] object-cover ' />
        <span className='text-[12px] text-gray-400 mb-1'>Just now</span>
      </div>
      <div className='messageContent max-w-[80%] flex flex-col gap-1'>
        <p className='text-[16px] items-center shadow-xl m-1 py-2 px-3 rounded-tr-full bg-[#e5e5ea] text-black float-left rounded-br-full'>
          Hello
        </p>
        {/* <p className='flex items-center text-[16px] items-center shadow-xl m-4 py-2 px-3  bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full'>
          Hello
        </p>
        <img src='' alt='' className='w-[40px] h-[40px] object-cover' />
        {/* <div className={`${style.message} ${messageClass} `}>
          <p className='absolute mt-[-4rem] text-gray-600 text-xs'>Jane</p>
          <p>Hello</p>
          <img src='' alt='avatar' />
        </div> */}
      </div>
    </div>
  )
}

export default Message
