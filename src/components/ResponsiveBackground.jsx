import { useEffect, useState } from 'react'

const ResponsiveBackground = ({ mobile, tablet, desktop, className = '', children }) => {
  const [bg, setBg] = useState(mobile)

  useEffect(() => {
    const updateBackground = () => {
      const width = window.innerWidth
      if (width >= 1280) setBg(desktop)
      else if (width >= 768) setBg(tablet)
      else setBg(mobile)
    }

    updateBackground()
    window.addEventListener('resize', updateBackground)
    return () => window.removeEventListener('resize', updateBackground)
  }, [mobile, tablet, desktop])

  return (
    <div
      className={`bg-cover bg-bottom ${className}`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      {children}
    </div>
  )
}

export default ResponsiveBackground
