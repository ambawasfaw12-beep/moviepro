import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import '../detail.css'

function Movie() {

    const api_key = "89d88dac6627f87412f6f29376c0915f"
    const { id } = useParams()
    const [detail, setDetail] = useState(null)

    const handleDetail = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
        const datas = await response.json()
        console.log(datas)
        setDetail(d => d = datas)
    }

    useEffect(() => {
        handleDetail()
    }, [id])

    if(id == "id" || id == ''){
        return
    }

    return (
        
            <div className="movie-page">

                <div className="movie-poster">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${detail?.poster_path}`}
                        alt={detail?.title}
                    />
                </div>

                <div className="movie-info">
                    <h1>{detail?.title}</h1>

                    <p>
                        ⭐ {detail?.vote_average}
                    </p>

                    <p>
                        📅 {detail?.release_date}
                    </p>

                    <p>
                        {detail?.overview}
                    </p>
                </div>

            </div>
    )
}

export default Movie