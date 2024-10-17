import CardContainer from '../components/CardContainer'
import { useState, useEffect } from 'react'
import 'ldrs/ring'
import { tailspin } from 'ldrs'
import MovieCard from '../components/MovieCard'
import Movies from '../data/movies.json'
export default function Home(){

    const [filmes, setFilmes] = useState([])

    const [isLoading, seIsLoading] = useState(false)

    tailspin.register()

    useEffect(() => {
        seIsLoading(true);
        setTimeout(() => {
            fetch("https://api.themoviedb.org/3/movie/popular?api_key=d9a8d36242026ab03fa115c720fa623a&language=pt-BR&page=1")
            .then(res => res.json())
            .then(res => setFilmes(res.results))
            .catch(erro => console.log(erro))
            .finally(() => seIsLoading(false))
        }, 1000)
    }, []);


    return(
        <>
        <CardContainer titulo="Filmes antigos">
            {
                isLoading ? <l-tailspin size="40"stroke="5"speed="0.9" color="white"></l-tailspin>
                :
                filmes
                .map(filme => (
                    <MovieCard key={filme.key} {...filme}/>
                ))
            }
        </CardContainer>

        <CardContainer titulo="Melhor avaliado">
            {
                isLoading ? <l-tailspin size="40"stroke="5"speed="0.9" color="white"></l-tailspin>
                :
                filmes
                .filter(filme => filme.vote_average > 6.7)
                .slice(0, 6)
                .map(filme => (
                    <MovieCard key={filme.key} {...filme}/>
                ))
            }
        </CardContainer>
        </>



    )
}