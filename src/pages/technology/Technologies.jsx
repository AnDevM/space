import { NavLink } from 'react-router-dom'

// Planet.jsx
function Technologies ({
  image,
  name,
  terminology = 'THE TERMINOLOGY…',
  description
}) {
  return (
    <div className='text-white text-center pb-12 mt-12 space-y-6 xl:flex xl:justify-between xl:flex-row-reverse xl:items-center xl:text-start xl:gap-6 xl:space-y-0 xl:m-0'>
      <picture>
        <source media='(min-width: 80rem)' srcSet={image.desktop} />
        <source media='(min-width: 48rem)' srcSet={image.tablet} />
        <img
          src={image.mobile}
          alt={name}
          className='md:mt-18 w-full h-66 object-cover md:h-auto'
        />
      </picture>
      <div className='space-y-6 xl:max-w-[539px] xl:flex gap-10 xl:items-center'>
        <ul className='flex justify-center gap-6 text-xl tracking-widest uppercase mt-8 md:text-base md:gap-8 md:mb-10 xl:flex-col'>
          {['A', 'B', 'C'].map((letter, i) => (
            <li key={letter} className=''>
              <NavLink
                to={`/technology/${letter}`}
                className={({ isActive }) =>
                  isActive
                    ? 'w-12 h-12 flex items-center justify-center rounded-full bg-white text-black transition xl:w-18 xl:h-18 xl:text-3xl'
                    : 'w-12 h-12 flex items-center justify-center rounded-full border-2 border-white/20  text-white hover:bg-white hover:text-black transition xl:w-18 xl:h-18 xl:text-3xl'
                }
              >
                {i + 1}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className='space-y-6'>
          <h2 className='text-2xl md:text-3xl uppercase opacity-30 tracking-wider'>
            {terminology}
          </h2>
          <h3 className='text-3xl md:text-4xl uppercase tracking-wider opacity-90'>
            {name}
          </h3>
          <p className='max-w-lg mx-auto text-base text-gray-300 xl:text-xl px-6 opacity-80 xl:p-0'>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Technologies
