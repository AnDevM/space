import ResponsiveBackground from '../../components/ResponsiveBackground'
import tecM from '/src/assets/technology/background-technology-mobile.jpg'
import tecT from '/src/assets/technology/background-technology-tablet.jpg'
import tecD from '/src/assets/technology/background-technology-desktop.jpg'

import { Outlet } from 'react-router-dom'

function Technology () {
  return (
    <ResponsiveBackground
      mobile={tecM}
      tablet={tecT}
      desktop={tecD}
      className='min-h-dvh'
    >
      <div className='text-center pt-6 md:text-start md:text-xl xl:px-40 xl:py-12 xl:text-2xl max-w-[100rem] xl:m-auto'>
        <h1 className='mt-22 tracking-widest xl:mt-32 md:ml-10 md:mt-30 xl:ml-0'>
          <span className='mr-5 font-bold opacity-50'>03</span><span className='text-white'>SPACE LAUNCH 101</span>
        </h1>
        <Outlet />
      </div>
    </ResponsiveBackground>
  )
}

export default Technology
