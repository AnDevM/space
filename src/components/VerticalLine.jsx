import { motion } from 'motion/react'
import { BsRocket } from "react-icons/bs";

function VerticalLine () {
  return (
    <div className='absolute top-0 left-3 h-full'>
      <motion.div
        className='absolute top-0'
        initial={{ top: '95%' }}
        animate={{ top: '0%' }}
        transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
      >
        <BsRocket className='text-2xl md:text-3xl'/>
      </motion.div>
    </div>
  )
}

export default VerticalLine
