import { NavLink } from 'react-router-dom'

// Planet.jsx
function Planet ({ image, name, description, distance, travelTime }) {
  return (
    <div className='text-white text-center mb-6 mt-12 space-y-6 xl:flex xl:justify-between xl:items-center xl:text-start xl:gap-6 xl:space-y-0 xl:mb-0'>
      <picture>
        <source media='(min-width: 80rem)' srcSet={image.desktop} />
        <source media='(min-width: 48rem)' srcSet={image.tablet} />
        <img
          src={image.mobile}
          alt={name}
          className='mx-auto md:mt-16 md:mb-22 h-40 md:h-72 xl:h-auto'
        />
      </picture>
      <div className='space-y-6 xl:space-y-12 xl:px-12 xl:max-w-[539px]'>
        <ul className='flex justify-center gap-6 tracking-widest text-sm uppercase text-white mt-8 md:text-base md:gap-8 md:mb-10 xl:justify-start'>
          {['moon', 'mars', 'europa', 'titan'].map(planet => (
            <li key={planet}>
              <NavLink
                to={`/destination/${planet}`}
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-2 border-white pb-2'
                    : 'hover:border-b hover:border-white pb-2'
                }
              >
                {planet}
              </NavLink>
            </li>
          ))}
        </ul>

        <h2 className='text-5xl md:text-7xl font-serif uppercase '>{name}</h2>
        <p className='max-w-lg mx-auto text-base text-gray-300 xl:text-xl'>
          {description}
        </p>

        <div className='border-t border-gray-700 pt-6 mt-6 flex flex-col md:flex-row md:justify-around gap-8 uppercase text-sm tracking-widest md:max-w-lg md:m-auto xl:justify-between xl:border-t-2'>
          <div>
            <p className='text-gray-400 text-xl'>Avg. Distance</p>
            <p className='text-3xl mt-4 md:text-3xl'>{distance}</p>
          </div>
          <div>
            <p className='text-gray-400 text-xl'>Est. Travel Time</p>
            <p className='text-3xl mt-4 md:text-3xl'>{travelTime}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Planet
