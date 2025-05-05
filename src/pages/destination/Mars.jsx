import Planet from './Planet'
import moonM from '/src/assets/destination/mars-mobile.png'
import moonT from '/src/assets/destination/mars-tablet.png'
import moonD from '/src/assets/destination/mars-desktop.png'

function Mars () {
  return (
    <Planet
      image={{
        mobile: moonM,
        tablet: moonT,
        desktop: moonD
      }}
      name='Mars'
      description="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
      distance='225 MIL. km'
      travelTime='9 months'
    />
  )
}

export default Mars