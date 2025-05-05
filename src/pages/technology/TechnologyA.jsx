import Technologies from './Technologies'
import tAM from '/src/assets/technology/tA-mobile.png'
import tAT from '/src/assets/technology/tA-tablet.png'
import tAD from '/src/assets/technology/tA-desktop.jpg'

function TechnologyA () {
  return (
    <Technologies
      image={{
        mobile: tAM,
        tablet: tAT,
        desktop: tAD
      }}
      name='LAUNCH VEHICLE'
      description="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    />
  )
}

export default TechnologyA