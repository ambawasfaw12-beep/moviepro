import { useContext } from 'react'
import { Link } from 'react-router-dom'
import unfiled from '../assets/gray heart.png'
import filed from '../assets/Red Heart.png'

import '../Home.css'
import './Moviecar.css'
import { FavoriteContext } from '../App'
function MovieCard({ datas }) {
const {favorites, setFavorites} = useContext(FavoriteContext)

    const handleFavorite = (event, movie) => {
        event.stopPropagation();
        event.preventDefault();

        const isMovieFavorite = favorites.some(
            fav => fav.id === movie.id
        );

        if (isMovieFavorite) {
            setFavorites(
                favorites.filter(fav => fav.id !== movie.id)
            );
        } else {
            setFavorites([...favorites, movie]);
        }
    };

    return (
            <section className='sextion-conteiner'>
                <h2>Top Rated movies</h2>
                <div className='slider-container' >
                    <div className='tranding_card'>
                        {datas.map(data =>
                            <Link key={data.id} to={`/movie/${data.id}`} className='link'>
                                <div className="movie-card"  >
                                    <h3>{data.title}</h3>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                                        alt={data.title}
                                    />
                                    <button
                                        onClick={(event) => handleFavorite(event, data)}
                                        className="favBtn"
                                    >
                                        <img
                                            src={
                                                favorites.some(fav => fav.id === data.id)
                                                    ? filed
                                                    : unfiled
                                            }
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </Link>
                        )}

                    </div>

                </div>
            </section>
    )
}

export default MovieCard