import Technologies from './Technologies'
import tBM from '/src/assets/technology/tB-mobile.png'
import tBT from '/src/assets/technology/tB-tablet.png'
import tBD from '/src/assets/technology/tB-desktop.png'

function TechnologyB () {
  return (
    <Technologies
      image={{
        mobile: tBM,
        tablet: tBT,
        desktop: tBD
      }}
      name='SPACEPORT'
      description='A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
    />
  )
}

export default TechnologyB