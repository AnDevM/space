import Technologies from './Technologies'
import tCM from '/src/assets/technology/tC-mobile.png'
import tCT from '/src/assets/technology/tC-tablet.png'
import tCD from '/src/assets/technology/tC-desktop.png'

function TechnologyC () {
  return (
    <Technologies
      image={{
        mobile: tCM,
        tablet: tCT,
        desktop: tCD
      }}
      name='SPACE CAPSULE'
      description='A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth is atmosphere without wings. Our capsule is where you will spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.'
    />
  )
}

export default TechnologyC