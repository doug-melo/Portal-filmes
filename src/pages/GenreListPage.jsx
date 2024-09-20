import { Link } from "react-router-dom"
import Movie from "../data/genres.json"
export default function GenreListPage(){
    return(
        <>
        {
                Movie
                .map(genero => (
                    <div className="text-white">
                        <Link to={`/genre/${genero.genero}`}>{genero.genero}</Link>
                    </div>
                ))
            }
        </>
    )
}