import { useState } from 'react'
import { Link } from 'react-router-dom'

import '../Home.css'
import './Moviecar.css'

function MovieCard({ datas }) {

    return (


        <section className='sextion-conteiner'>
            <h2>Top Rated movies</h2>
            <div className='slider-container' >
                <div className='tranding_card'>
                    {datas.map(data =>
                        <Link key={data.id} to={`/movie/:${data.id}`} className='link'>
                            <div className="movie-card"  >
                                <h3>{data.title}</h3>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                                    alt={data.title}
                                />
                            </div>
                        </Link>
                    )}

                </div>

            </div>
        </section>
    )
}

export default MovieCard