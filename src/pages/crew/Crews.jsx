import { NavLink } from "react-router-dom"

function Crew ({ image, role, name, description }) {
  return (
    <div className='text-center mb-6 mt-12 space-y-6 xl:flex xl:justify-between xl:items-center xl:text-start xl:space-y-0 xl:m-0'>
      <div className='order-2 xl:order-1 space-y-6 xl:space-y-10 xl:px-12 xl:max-w-[500px]'>
        <h2 className='text-xl md:text-2xl text-gray-400 uppercase font-serif tracking-widest xl:mt-30'>
          {role}
        </h2>
        <h3 className='text-2xl md:text-3xl uppercase font-serif'>{name}</h3>
        <p className='max-w-xl mx-auto text-base text-gray-300 xl:text-lg'>
          {description}
        </p>

        <ul className='flex justify-center gap-4 xl:justify-start mt-8 xl:gap-7'>
          {['A', 'B', 'C', 'D'].map(crew => (
            <li key={crew}>
              <NavLink
                to={`/crew/${crew}`}
                className={({ isActive }) =>
                  `w-2 h-2 inline-block rounded-full transition-colors duration-300 xl:w-3 xl:h-3 xl:mt-36 xl:mb-4 ${
                    isActive ? 'bg-white' : 'bg-gray-600 hover:bg-gray-300'
                  }`
                }
              />
            </li>
          ))}
        </ul>
      </div>

      <picture className='order-1 xl:order-2'>
        <source media='(min-width: 80rem)' srcSet={image.desktop} />
        <source media='(min-width: 48rem)' srcSet={image.tablet} />
        <img
          src={image.mobile}
          alt={name}
          className='mx-auto -mb-6 md:-mb-16 xl:mb-0'
        />
      </picture>
    </div>
  )
}

export default Crew
