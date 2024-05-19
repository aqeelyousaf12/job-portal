
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Login from './Components/Login'

function App() {
  

  return (
    <>
    <Login/>
    <Navbar/>
    <Outlet/>
    
    </>
  )
}

export default App
