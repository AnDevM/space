import ResponsiveBackground from '../../components/ResponsiveBackground'
import crewM from '/src/assets/crew/background-crew-mobile.jpg'
import crewT from '/src/assets/crew/background-crew-tablet.jpg'
import crewD from '/src/assets/crew/background-crew-desktop.jpg'

import { Outlet } from 'react-router-dom'

function Crew () {
  return (
    <ResponsiveBackground
      mobile={crewM}
      tablet={crewT}
      desktop={crewD}
      className='min-h-dvh'
    >
      <div className='text-center p-6 md:p-10 md:text-start md:text-xl xl:px-40 xl:py-12 xl:text-2xl max-w-[100rem] xl:m-auto xl:pb-0'>
        <h1 className='mt-22 tracking-widest xl:mt-32'>
          <span className='mr-5 font-bold opacity-50'>02</span><span>MEET YOUR CREW</span>
        </h1>
        <Outlet />
      </div>
    </ResponsiveBackground>
  )
}

export default Crew