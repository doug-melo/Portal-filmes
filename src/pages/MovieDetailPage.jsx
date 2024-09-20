import { useParams } from "react-router-dom"
import Movie from '../data/movies.json'

export default function MovieDetailPage(){
    
    const { id } = useParams()
    console.log(Movie)
    return(
        <>

        {
            Movie
            .filter((Movie) => Movie.id.toString() === id)
            .map((Movie) => <div className="text-white w-3/4 mx-auto my-0 mt-24 content-center">
                <h1 className="text-5xl text-center">{Movie.titulo}</h1>
                <p className="text-center">{Movie.ano_lancamento}</p>
                <img className="w-4/5 h-1/4 object-cover "src={`/${Movie.imagem_destaque}`} alt="" />
                <p className="text-justify w-3/4">{Movie.sinopse}</p>
                <p>{Movie.diretor}</p>
                <a className="bg-red-600 p-3 m-3 flex al w-2/4 h-12" href={`https://google.com.br/search?q=${Movie.titulo}`} target="_blank">Assistir</a>
            </div>   
        )
        }
        </>
    )
}