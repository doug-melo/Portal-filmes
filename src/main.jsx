import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from '../src/pages/Home.jsx'
import Genero from '../src/pages/GenreListPage.jsx'
import GeneroDetalhe from '../src/pages/MoviesByGenrePage.jsx'
import Filme from '../src/pages/MovieListPage.jsx'
import DetalheFilme from '../src/pages/MovieDetailPage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

{/* Deve ter as rotas:
  home
  filmes
  Detalhes do Filme
  Lista de gêneros
  Filmes por gênero
  Page Not Found
  */}

  const router = createBrowserRouter([

    {
      path: '/',
      element: <App/>,
      children:[
        {index: true, element: <Home/>},
        {path: "movies", element: <Filme/>},
        {path: "movies/:id", element: <DetalheFilme/>},
        {path: "genre", element: <Genero/>},
        {path: "genre/:id", element: <GeneroDetalhe/>},
        {path: '*', element: <PageNotFound/>},
      ]
    }
  ]
  
  )
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
