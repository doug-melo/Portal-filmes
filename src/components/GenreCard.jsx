import { useParams } from "react-router-dom"
import Movie from "../data/movies.json"
import MovieCard from "./MovieCard"
export default function GenreCard() {
    const { id } = useParams()
    return(
        <div>
            {
                Movie.filter(filme => filme.genero == id)
                .map(filme => (
                    <MovieCard key={filme.key} {...filme}/>
                ))
            }
        </div>
    )
}