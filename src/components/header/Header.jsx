import { useEffect, useRef, useState } from 'react'
import Burger from './Burger'
import MenuMob from './MenuMob'
import MenuDesktop from './MenuDesktop'

import logo from '/src/assets/shared/logo.svg'
import { Link, useLocation } from 'react-router-dom'

import { motion } from 'motion/react'

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) return
      handler(event)
    }
    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}

function Header () {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  const location = useLocation()

  return (
    <motion.div 
    key={location.pathname}
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay:0.5, duration: 1, ease: 'easeOut' }}
    className='absolute top-0 left-0 w-full z-10'>
      <Link to='/'><img src={logo} alt='Logo' className=' h-10 w-10 m-7 md:h-auto md:w-auto xl:m-16 hover:scale-105' /></Link>
      <div className='md:hidden' ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <MenuMob open={open} setOpen={setOpen} />
      </div>
      <MenuDesktop />
    </motion.div>
  )
}

export default Header
