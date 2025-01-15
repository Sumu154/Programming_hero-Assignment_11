import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div className='font-Poppins bg-lightyellow   dark:bg-darkbackground'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App;
