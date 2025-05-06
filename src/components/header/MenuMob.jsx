import React from 'react'
import { Link } from 'react-router-dom'

const MenuMob = ({ open, setOpen }) => {
  return (
    <nav
      className={`fixed top-0 right-0 h-screen w-[75%] bg-white/10 backdrop-blur-lg px-8 pt-32 flex flex-col gap-8 transition-transform duration-300 ease-in-out z-50 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <Link
        to='/'
        onClick={() => setOpen(false)}
        className='relative text-white text-sm uppercase font-bold tracking-[.3rem] hover:text-white/50 transition-colors duration-300'
      >
        00&nbsp;Home
        <span className='absolute top-0 right-[-2rem] h-full w-1 bg-white/50 scale-y-0 origin-right transition-transform duration-500 hover:scale-y-100'></span>
      </Link>
      <Link
        to='/destination'
        onClick={() => setOpen(false)}
        className='relative text-white text-sm uppercase font-bold tracking-[.3rem] hover:text-white/50 transition-colors duration-300'
      >
        01&nbsp;Destination
        <span className='absolute top-0 right-[-2rem] h-full w-1 bg-white/50 scale-y-0 origin-right transition-transform duration-500 hover:scale-y-100'></span>
      </Link>
      <Link
        to='/crew'
        onClick={() => setOpen(false)}
        className='relative text-white text-sm uppercase font-bold tracking-[.3rem] hover:text-white/50 transition-colors duration-300'
      >
        02&nbsp;Crew
        <span className='absolute top-0 right-[-2rem] h-full w-1 bg-white/50 scale-y-0 origin-right transition-transform duration-500 hover:scale-y-100'></span>
      </Link>
      <Link
        to='/technology'
        onClick={() => setOpen(false)}
        className='relative text-white text-sm uppercase font-bold tracking-[.3rem] hover:text-white/50 transition-colors duration-300'
      >
        03&nbsp;Technology
        <span className='absolute top-0 right-[-2rem] h-full w-1 bg-white/50 scale-y-0 origin-right transition-transform duration-500 hover:scale-y-100'></span>
      </Link>
    </nav>
  )
}

export default MenuMob
