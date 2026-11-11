import { useState } from 'react'
import MovieCard from '../COMPONET/Moviecar'
import searchIcon from '../assets/search.svg'
import '../Home.css'

function Home({
    trandingMovies,
    topRateds,
    search,
    setSearch,
    searchMovies,
    searchResults
}) {

    const handleSubmit = event => {
        event.preventDefault();
        searchMovies();
    }

    return (
        <div className='parent'>

            <div className="continer">
                <header className="hero overlay">
                    <div className='content'>
                        <h1>Unlimited Movies, TV Shows & Entertainment</h1>
                        <p>
                            Discover trending movies, top-rated shows, and your next favorite
                            watch.
                        </p>
                        <button className='expolor-btn'>Explore Movies</button>
                    </div>
                </header>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search'
                    className='searchInput'
                />
                <button type='submit'><img src={searchIcon} alt="searchIcon" /></button>
            </form>

            {
                searchResults.length > 0 ? (
                    <MovieCard datas={searchResults} />
                ) : (
                    <>
                        <MovieCard datas={trandingMovies} />
                        <MovieCard datas={topRateds} />
                    </>
                )
            }

        </div>
    )
}

export default Home