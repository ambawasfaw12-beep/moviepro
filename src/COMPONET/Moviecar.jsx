import '../Home.css'

function MovieCard({datas}){

    return(
      <section className='sextion-conteiner'>

                <h2>Top Rated movies</h2>
                <div className='slider-container'>
                    <div className='tranding_card'>
                        {datas.map(data => <div className="movie-card" key={data.id}>
                            <h3>{data.title}</h3>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                                alt={data.title}
                            />
                        </div>)}

                    </div>

                </div>
            </section>
    )
}

export default MovieCard