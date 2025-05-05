import Crews from './Crews'
import crewDM from '/src/assets/crew/crewD-mobile.png'
import crewDT from '/src/assets/crew/crewD-tablet.png'
import crewDD from '/src/assets/crew/crewD-desktop.png'

function CrewD () {
  return (
    <Crews
      image={{
        mobile: crewDM,
        tablet: crewDT,
        desktop: crewDD
      }}
      role='Flight Engineer'
      name='Anousheh Ansari'
      description='Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. '
    />
  )
}

export default CrewD
