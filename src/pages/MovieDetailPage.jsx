import { useParams,  } from "react-router-dom"
import { useState, useEffect  } from "react"

export default function MovieDetailPage(){
    
    const { id } = useParams()

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d9a8d36242026ab03fa115c720fa623a&language=pt-BR`)
        .then(res => res.json())
        .then(res => 
            setFilmes(res))
        .catch(erro => console.log(erro))
    }, [])

    return(
        <>
        <div className="w-4/5 mx-auto my-0 mt-16">
            <h1 className='text-white' >{filmes.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w92${filmes.poster_path}`} alt="" />
        </div>
        </>
    )
}