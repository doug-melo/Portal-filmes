import Movies from "../data/movies.json"
import MovieDetailPage from "./MovieDetailPage"
import MovieCard from "../components/MovieCard"
import CardContainer from "../components/CardContainer"
export default function MovieListPage(){
    return(
       <div className="flex flex-wrap mx-auto my-0">
        <CardContainer titulo="">
            {
                Movies
                .map(filme => (
                    <MovieCard key={filme.key} {...filme}/>
                ))
            }
        </CardContainer>
       </div>
    )
}