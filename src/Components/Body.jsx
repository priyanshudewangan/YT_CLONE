import React from 'react'
import ButtonList from './ButtonList'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Body = () => {
  return (
    <div className='w-screen'>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <div className='flex-1'>
          {/* <ButtonList /> */}
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Body