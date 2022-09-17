import Message from './Message'

function Messages() {
  return (
    <div className='messages h-[73%] p-1 overflow-y-scroll bg-white'>
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default Messages
