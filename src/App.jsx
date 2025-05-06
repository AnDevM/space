import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import VerticalLine from './components/VerticalLine'

function App () {
  return (
    <>
      <div className='overflow-x-hidden'>
        <Header />
        <VerticalLine />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
