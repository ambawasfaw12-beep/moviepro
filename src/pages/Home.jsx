import MovieCard from '../COMPONET/Moviecar'
import '../Home.css'

function Home({ trandingMovies, topRateds }) {

    return (
        <>
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

            <MovieCard datas={trandingMovies} />
            <MovieCard datas={topRateds} />

        </>
    )
}

export default Home