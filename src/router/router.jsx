import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '../App'
import Home from '../pages/home/Home'
import Destination from '../pages/destination/Destination'
import Moon from '../pages/destination/Moon'
import Mars from '../pages/destination/Mars'
import Europa from '../pages/destination/Europa'
import Titan from '../pages/destination/Titan'
import Crew from '../pages/crew/Crew'
import CrewA from '../pages/crew/CrewA'
import CrewB from '../pages/crew/CrewB'
import CrewC from '../pages/crew/CrewC'
import CrewD from '../pages/crew/CrewD'
import Technology from '../pages/technology/technology'
import TechnologyA from '../pages/technology/TechnologyA'
import TechnologyB from '../pages/technology/TechnologyB'
import TechnologyC from '../pages/technology/TechnologyC'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/destination',
        element: <Destination />,
        children: [
          { index: true, element: <Navigate to='moon' /> },
          { path: 'moon', element: <Moon /> },
          { path: 'mars', element: <Mars /> },
          { path: 'europa', element: <Europa /> },
          { path: 'titan', element: <Titan /> }
        ]
      },
      {
        path: 'crew',
        element: <Crew />,
        children: [
          { index: true, element: <Navigate to='A' /> },
          { path: 'A', element: <CrewA /> },
          { path: 'B', element: <CrewB /> },
          { path: 'C', element: <CrewC /> },
          { path: 'D', element: <CrewD /> }
        ]
      },
      {
        path: 'technology',
        element: <Technology />,
        children: [
          { index: true, element: <Navigate to='A' />},
          { path: 'A', element: <TechnologyA />},
          { path: 'B', element: <TechnologyB />},
          { path: 'C', element: <TechnologyC />},
        ]
      }
    ]
  }
])

export default router
