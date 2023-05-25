import Home from "./pages/Home"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MoviesPage from "./pages/MoviesPage"
import SeriesPage from "./pages/SeriesPage"
import OverviewPage from "./pages/OverviewPage"
import useApp from "./hooks/useApp"
import axios from './constants/index'

function App() {
  const {movies, loading, details, detailIsLoading, handleFetchDetailsOverview, handleSetSelectedMovieType} = useApp()
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home {...{movies, loading,}}/>
    }, 
    {
      path: "/movies",
      element: <MoviesPage/>
    }, 
    {
      path: "/series",
      element: <SeriesPage/>
    }, 
    {
      path: "/overview/:mediaType/:id",
      element: <OverviewPage {...{ handleSetSelectedMovieType, handleFetchDetailsOverview, details}}/>,
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
export default App


// axios.get(`${params.id}${params.mediaType}`)