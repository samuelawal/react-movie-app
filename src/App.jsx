import Home from "./pages/Home"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MoviesPage from "./pages/MoviesPage"
import SeriesPage from "./pages/SeriesPage"
import OverviewPage from "./pages/OverviewPage"
import useApp from "./hooks/useMovies"

function App() {
  const {movies, loading} = useApp()
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home {...{movies, loading}}/>
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
      path: "overview/:id",
      element: <OverviewPage/>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
export default App
