import CardContainer from '../components/CardContainer'
import MovieCard from '../components/MovieCard'
import Movies from '../data/movies.json'
export default function Home(){

    
    return(
        <>
        <CardContainer titulo="Filmes antigos">
            {
                Movies
                .filter(filme => filme.ano_lancamento < 2000)
                .map(filme => (
                    <MovieCard key={filme.key} {...filme}/>
                ))
            }
        </CardContainer>

        <CardContainer titulo="Melhor avaliado">
            {
                Movies
                .filter(filme => filme.avaliacao > 8.7)
                .slice(0, 6)
                .map(filme => (
                    <MovieCard key={filme.key} {...filme}/>
                ))
            }
        </CardContainer>
        </>



    )
}