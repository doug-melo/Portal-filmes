import { useParams } from "react-router-dom"
import Movie from "../data/movies.json"
export default function MovieDetailPage(id, titulo, ano_lancamento, descricao){

    const { id } = useParams()
    return(
        <>
        <h1>Titulo</h1>
        <a href="">Assistir</a>
        {/* Exibe detalhes de um filme específico. */}
        </>
    )
}