import React from 'react'
import react from '../assets/react.svg'

const Navbar = () => {
  return (
    <div className='w-screen h-[150px] bg-[#59749B] flex flex-row gap-10 items-center justify-center'>
        <img src={react} className='h-[50px] w-[50px] cursor-pointer'/>
        <div className='flex flex-row gap-10 cursor-pointer text-white font-semibold text-[24px]'>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Contact</h1>
        </div>
    </div>
  )
}

export default Navbar