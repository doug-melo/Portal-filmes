import Movies from "../data/movies.json"
import MovieDetailPage from "./MovieDetailPage"
import MovieCard from "../components/MovieCard"
import CardContainer from "../components/CardContainer"
import { useState, useEffect } from "react"
export default function MovieListPage(){

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=d9a8d36242026ab03fa115c720fa623a&language=pt-BR&page=1")
        .then(res => res.json())
        .then(res => setFilmes(res.results))
        .catch(erro => console.log(erro))
        .finally(() => console.log("FIM"))
    }, [])

    return( 
       <div className="flex flex-wrap flex-row mx-auto my-0">
        <CardContainer titulo="">
            {
                filmes.map(filme =>(
                    <>
                    <h1 className="text-white">{filme.title}</h1>
                    <img src={`https://image.tmdb.org/t/p/w92${filme.poster_path}`}/>
                    <img src={`https://image.tmdb.org/t/p/w1280${filme.backdrop_path}`} alt="" />
                    </>
                ))
            }
        </CardContainer>
       </div>
    )
}