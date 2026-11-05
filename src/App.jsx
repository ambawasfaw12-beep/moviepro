
import { useState, useEffect, createContext } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import Detail from './pages/Detail'
import Movie from './pages/Movie'
import './App.css'

function App() {

  const api_key = "89d88dac6627f87412f6f29376c0915f"

  const [trandingMovies, setTrandingMovies] = useState([])
  const [topRated, setTopRated] = useState([])

  const getTrandingMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`)
    const trending = await response.json()
    setTrandingMovies(t => t = trending.results)
  }

  const getMostReted = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`
    )
    const torate = await response.json()
    setTopRated(t => t = torate.results)
  }


  useEffect(() => {
    getTrandingMovie()
    getMostReted()
  }, [])



  return (
    <>
      <nav className='navigation_bar'>
        <div>
          <Link className='nav-link' to='/'>Home</Link>
          <Link className='nav-link' to='/favorite'>Favorite</Link>
          <Link className='nav-link' to='/detail'>Detail</Link>
          <Link className='nav-link' to='/movie'>Movie</Link>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home trandingMovies={trandingMovies} topRateds={topRated} />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/movie' element={<Movie />} />
      </Routes>

    </>
  )
}

export default App
