
import { useState, useEffect, createContext } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import Movie from './pages/Movie'
import './App.css'

export const FavoriteContext = createContext();

function App() {

  const api_key = "89d88dac6627f87412f6f29376c0915f"

  const [trandingMovies, setTrandingMovies] = useState([])
  const [topRated, setTopRated] = useState([])
  const [favorites, setFavorites] = useState([])
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const searchMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search}`)
    const searchedMovies = await response.json()
    setSearchResults(searchedMovies.results)
  }


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
        </div>
      </nav>

      <FavoriteContext.Provider value={{ favorites, setFavorites }}>
        <Routes>
          <Route path='/' element={<Home
            trandingMovies={trandingMovies}
            topRateds={topRated}
            search={search}
            setSearch={setSearch}
            searchMovies={searchMovies}
            searchResults={searchResults}
          />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/movie/:id' element={<Movie />} />
        </Routes>
      </FavoriteContext.Provider>
    </>

  )
}

export default App
