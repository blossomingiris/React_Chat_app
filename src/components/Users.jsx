function Users() {
  return (
    <div className='chats'>
      <div className='flex items-center p-2 cursor-pointer hover:bg-stone-800 gap-2'>
        <img
          src=''
          alt=''
          className='h-[24px] w-[24px] rounded-full bg-grey-100 object-cover'
        />
        <div>
          <span className='text-white text-sm p-1'>Mike</span>
          <p className='text-gray-400 text-[0.7em] px-1'>Hello</p>
        </div>
      </div>

      <div className='flex items-center p-2 cursor-pointer hover:bg-stone-800 gap-2'>
        <img
          src=''
          alt=''
          className='h-[24px] w-[24px] rounded-full bg-grey-100 object-cover'
        />
        <div>
          <span className='text-white text-sm p-1'>Sonny</span>
          <p className='text-gray-400 text-[0.7em] px-1'>See ya!</p>
        </div>
      </div>

      <div className='flex items-center p-2 cursor-pointer hover:bg-stone-800 gap-2'>
        <img
          src=''
          alt=''
          className='h-[24px] w-[24px] rounded-full bg-grey-100 object-cover'
        />
        <div>
          <span className='text-white text-sm p-1'>Kim</span>
          <p className='text-gray-400 text-[0.7em] px-1'>How are you?</p>
        </div>
      </div>
    </div>
  )
}

export default Users
