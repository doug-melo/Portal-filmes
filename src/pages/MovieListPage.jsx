import Movie from "../data/movies.json"
import MovieDetailPage from "./MovieDetailPage"
export default function MovieListPage(){
    return(
        <>
        <h1>Movie List Page</h1>
        {
                Movie
                .map(filme => (
                    <MovieDetailPage key={filme.key} {...filme}/>
                ))
        }
        </>
    )
}