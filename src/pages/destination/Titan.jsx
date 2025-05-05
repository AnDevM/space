import Planet from './Planet'
import titanM from '/src/assets/destination/titan-mobile.png'
import titanT from '/src/assets/destination/titan-tablet.png'
import titanD from '/src/assets/destination/titan-desktop.png'

function Titan () {
  return (
    <Planet
      image={{
        mobile: titanM,
        tablet: titanT,
        desktop: titanD
      }}
      name='Titan'
      description='The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
      distance='1.6 BIL. km'
      travelTime='7 years'
    />
  )
}

export default Titan
