import { Link } from "react-router-dom";

export default function MovieCard({id, titulo, imagem_destaque, ano_lancamento}) {
    return(
        <>
        <div className="flex flex-col w-40 bg-black text-white gap-5 text-center self-center">
            <p>{titulo}</p>
            <p>{ano_lancamento}</p>
            <img className="w-40 h-52 object-cover"src={`/${imagem_destaque}`} alt="" />
            <Link className="bg-purple-700 rounded-md" to={`/movies/${id}`}>Saiba Mais</Link>
        </div>  
        </>
    )

}