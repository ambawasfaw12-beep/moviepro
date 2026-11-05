import '../Home.css'

function Home({ trandingMovies }) {

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
            <section className='sextion-conteiner'>

                <h2>Tranding movies</h2>
                <div className='slider-container'>
                    <div className='tranding_card'>
                        {trandingMovies.map(trandingMovie => <div className="movie-card" key={trandingMovie.id}>
                            <h3>{trandingMovie.title}</h3>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${trandingMovie.poster_path}`}
                                alt={trandingMovie.title}
                            />
                        </div>)}

                    </div>

                </div>
            </section>
        </>
    )
}

export default Home