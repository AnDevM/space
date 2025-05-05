import Planet from './Planet'
import europaM from '/src/assets/destination/europa-mobile.png'
import europaT from '/src/assets/destination/europa-tablet.png'
import europaD from '/src/assets/destination/europa-desktop.png'

function Europa () {
  return (
    <Planet
      image={{
        mobile: europaM,
        tablet: europaT,
        desktop: europaD
      }}
      name='Europa'
      description='The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.'
      distance='628 MIL. km'
      travelTime='3 Years'
    />
  )
}

export default Europa
