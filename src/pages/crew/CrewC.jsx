import Crews from './Crews'
import crewCM from '/src/assets/crew/crewC-mobile.png'
import crewCT from '/src/assets/crew/crewC-tablet.png'
import crewCD from '/src/assets/crew/crewC-desktop.png'

function CrewC () {
  return (
    <Crews
      image={{
        mobile: crewCM,
        tablet: crewCT,
        desktop: crewCD
      }}
      role='PILOT'
      name='Victor Glover'
      description='Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. '
    />
  )
}

export default CrewC
