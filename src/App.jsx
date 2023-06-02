import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import OverviewPage from "./pages/OverviewPage";
import useApp from "./hooks/useApp";
import axios from "./constants/index";
import SearchPage from "./pages/SearchPage";
import RootLayout from "./pages/Root/Root";

function App() {
  const {
    movies,
    isSeriesLoading,
    details,
    isdetailsLoading,
    handleFetchDetailsOverview,
    handleSetSelectedMovieType,
    fetchTvShows,
    series,
    isMoviesLoading,
  } = useApp();
  const router = createBrowserRouter([
   {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        path: "",
        index: true,
        element: <Home {...{ movies, isMoviesLoading }} />,
      },
      {
        path: "movies",
        element: <MoviesPage />,
      },
      {
        path: "search",
        element: <SearchPage/>
      },
      {
        path: "series",
        element: (
          <SeriesPage {...{ series, fetchTvShows, isSeriesLoading }} />
        ),
      },
      {
        path: "overview/:mediaType/:id",
        element: (
          <OverviewPage
            {...{
              handleSetSelectedMovieType,
              handleFetchDetailsOverview,
              details,
              isdetailsLoading,
            }}
          />
        ),
      },
    ],
  },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;

// axios.get(`${params.id}${params.mediaType}`)
