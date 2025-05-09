import Crews from './Crews'
import crewBM from '/src/assets/crew/crewB-mobile.png'
import crewBT from '/src/assets/crew/crewB-tablet.png'
import crewBD from '/src/assets/crew/crewB-desktop.png'

function CrewB () {
  return (
    <Crews
      image={{
        mobile: crewBM,
        tablet: crewBT,
        desktop: crewBD
      }}
      role='Mission Specialist '
      name='MARK SHUTTLEWORTH'
      description='Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.
'
    />
  )
}

export default CrewB
