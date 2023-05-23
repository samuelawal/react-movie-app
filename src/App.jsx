import Home from "./pages/Home"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MoviesPage from "./pages/MoviesPage"
import SeriesPage from "./pages/SeriesPage"
import OverviewPage from "./pages/OverviewPage"
import useApp from "./hooks/useMovies"

function App() {
  const {movies, loading, details, detailIsLoading} = useApp()
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
      path: "overview/:mediaType/:id",
      element: <OverviewPage {...{detailIsLoading, details,}}/>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
export default App
