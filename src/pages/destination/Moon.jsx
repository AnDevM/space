import Planet from './Planet'
import moonM from '/src/assets/destination/moon-mobile.png'
import moonT from '/src/assets/destination/moon-tablet.png'
import moonD from '/src/assets/destination/moon-desktop.png'

function Moon () {
  return (
    <Planet
      image={{
        mobile: moonM,
        tablet: moonT,
        desktop: moonD
      }}
      name='Moon'
      description='See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'
      distance='384,400 KM'
      travelTime='3 DAYS'
    />
  )
}

export default Moon
