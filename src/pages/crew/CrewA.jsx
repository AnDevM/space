import Crews from './Crews'
import crewAM from '/src/assets/crew/crewA-mobile.png'
import crewAT from '/src/assets/crew/crewA-tablet.png'
import crewAD from '/src/assets/crew/crewA-desktop.png'

function CrewA () {
  return (
    <Crews
      image={{
        mobile: crewAM,
        tablet: crewAT,
        desktop: crewAD
      }}
      role='Commander'
      name='Douglas Hurley'
      description='Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
    />
  )
}

export default CrewA
