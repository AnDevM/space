import ResponsiveBackground from '../../components/ResponsiveBackground'
import desM from '/src/assets/destination/background-destination-mobile.jpg'
import desT from '/src/assets/destination/background-destination-tablet.jpg'
import desD from '/src/assets/destination/background-destination-desktop.jpg'

import { Outlet } from 'react-router-dom'

function Destination () {
  return (
    <ResponsiveBackground
      mobile={desM}
      tablet={desT}
      desktop={desD}
      className='min-h-dvh'
    >
      <div className='text-center p-6 md:p-10 md:text-start md:text-xl xl:px-40 xl:py-12 xl:text-2xl max-w-[100rem] xl:m-auto'>
        <h1 className='mt-22 tracking-widest xl:mt-32'>
          <span className='mr-5 font-bold opacity-50'>01</span><span className='text-white'>PICK YOUR DESTINATION</span>
        </h1>
        <Outlet />
      </div>
    </ResponsiveBackground>
  )
}

export default Destination
