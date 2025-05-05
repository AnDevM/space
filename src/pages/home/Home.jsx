import ResponsiveBackground from '../../components/ResponsiveBackground'
import homeM from '/src/assets/home/background-home-mobile.jpg'
import homeT from '/src/assets/home/background-home-tablet.jpg'
import homeD from '/src/assets/home/background-home-desktop.jpg'
import { Link } from 'react-router-dom'

import { motion } from 'motion/react'

function Home () {
  return (
    <ResponsiveBackground
      mobile={homeM}
      tablet={homeT}
      desktop={homeD}
      className='min-h-dvh'
    >
      <div className='pb-30 xl:flex xl:pt-[26rem] xl:px-40 xl:justify-around xl:gap-20 xl:items-center'>
        <article className='px-6 m-auto pt-24 text-center md:pt-56 max-w-xl xl:text-start xl:relative xl:p-0 xl:m-0'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className='tracking-[0.15em] uppercase mb-12 md:text-3xl mt-12'
          >
            So, you want to travel to <br />
            <span className='text-white text-7xl md:text-9xl'>Space</span>
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay:0.5, duration: 1, ease: 'easeOut' }}
            className='mb-16'
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </motion.p>
        </article>
        <Link to='/destination'>
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className='w-36 h-36 md:w-72 md:h-72 text-gray-500 mx-auto text-2xl md:text-4xl tracking-widest uppercase bg-white rounded-full flex items-center justify-center hover:shadow-xl transition cursor-pointer mt-40 hover:scale-105 md:mt-0'
          >
            Explore
          </motion.button>
        </Link>
      </div>
    </ResponsiveBackground>
  )
}

export default Home
