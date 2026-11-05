
import { useState, useEffect, createContext } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import Detail from './pages/Detail'
import Movie from './pages/Movie'
import './App.css'

function App() {

  return (
    <>
      <nav className='navigation_bar'>
        <div>
          <Link className='nav-link' to='/'>Home</Link>
          <Link className='nav-link'  to='/favorite'>Favorite</Link>
          <Link className='nav-link'  to='/detail'>Detail</Link>
          <Link className='nav-link'  to='/movie'>Movie</Link>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/movie' element={<Movie />} />
      </Routes>

    </>
  )
}

export default App
