import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavbarComponent from './assets/components/NavbarComponent'
import DefaultComponent from './assets/components/DefaultComponent'
import Home from './assets/components/Home'
import WeatherComponent from './assets/components/WeatherComponent'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout}></Home>}></Route>
          <Route path='weather' element={<WeatherComponent></WeatherComponent>}></Route>

          {/* Default page when no route is matched */}
          <Route path='*' element={<DefaultComponent></DefaultComponent>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
