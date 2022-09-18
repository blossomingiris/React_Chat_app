import { auth } from '../../firebase'

const style = {
  message: `flex items-center text-[0.75em] shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[5em] text-gray-400 text-[0.85em]`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
}

function Message({ message }) {
  const messageClass =
    message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`

  return (
    <div className={`${style.message} ${messageClass}`}>
      <p className={style.name}>{message.name}</p>
      <p>{message.text}</p>
    </div>
  )
}

export default Message
