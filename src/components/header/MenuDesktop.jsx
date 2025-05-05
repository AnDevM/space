import { Link } from 'react-router-dom'

import { motion } from 'motion/react'

const MenuDesktop = () => {
  return (
    <nav className='w-3/4 hidden md:flex items-center justify-around bg-[rgba(255,255,255,0.05)] backdrop-blur-md px-12 py-9 uppercase  tracking-widest text-white absolute top-0 right-0 z-50 xl:w-1/2 xl:pl-28 xl:pr-6 xl:top-10'>
      {[
        ['00 Home', '/'],
        ['01 Destination', '/destination'],
        ['02 Crew', '/crew'],
        ['03 Technology', '/technology']
      ].map(([label, to], index) => (
        <Link
          key={index}
          to={to}
          className='relative no-underline hover:text-white/50 transition-colors duration-300 group'
        >
          {label}
          <span className='absolute bottom-[-2.2rem] left-0 w-full h-0.5 bg-white/50 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-400' />
        </Link>
      ))}
      <div className='hidden xl:block absolute top-1/2 translate-y-1/2 h-px bg-white/20 xl:w-10/12 xl:-translate-x-[94%] left-0'>
        <div className='w-full relative h-full'>
          <motion.div
            className='absolute -top-[1px] h-[3px] w-2'
            initial={{ left: '-2%' }}
            animate={{ left: '100%' }}
            transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
            style={{
              background:
                'linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)'
            }}
          />
        </div>
      </div>
    </nav>
  )
}

export default MenuDesktop
