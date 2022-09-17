import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Users from './Users'

function Sidebar() {
  return (
    <div className='bg-stone-700'>
      <Navbar />
      <Search />
      <Users />
    </div>
  )
}

export default Sidebar
