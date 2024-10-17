import { Link } from "react-router-dom";

export default function MovieCard({id, title, release_date, poster_path}) {
    return(
        <>
        <div className="flex flex-col w-40 bg-black text-white gap-5 text-center self-center">
            <p>{title}</p>
            <img className="w-40 h-52 object-cover"src={`https://image.tmdb.org/t/p/w92${poster_path}`} alt="" />
            <Link className="bg-purple-700 rounded-md" to={`/movies/${id}`}>Saiba Mais</Link>
        </div>  
        </>
    )

}