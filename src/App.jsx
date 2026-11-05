
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
      <nav>
        <Link to='/'>Home</Link>|
        <Link to='/favorite'>Favorite</Link>
        <Link to='/detail'>Detail</Link>
        <Link to='/movie'>Movie</Link>

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
