import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import VerticalLine from './components/VerticalLine'

function App () {
  return (
    <>
      <Header />
      <VerticalLine />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
