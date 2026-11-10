import { useContext } from "react"
import { FavoriteContext } from "../App"
import '../Favorite.css'

function Favorite() {

    const { favorites } = useContext(FavoriteContext)
    console.log(favorites)


    return (
        <div className="contianer">
            {favorites.map(favorite => (
                <div key={favorite.id} className="box">
                    <h1>{favorite.title}</h1>
                    <img src={`https://image.tmdb.org/t/p/w500${favorite.
                        poster_path}`} alt="" />
                    <p><span>Rating:</span> {favorite.vote_average}</p>
                    <p><span>Vote:</span> {favorite.vote_count}</p>
                    <p><span>Overview:</span> {favorite.overview}</p>
                </div>
            )
            )}
        </div>
    )
}

export default Favorite