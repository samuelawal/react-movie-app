import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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
    isSearchingResult,
    searchResults,
    handleSearchResults,
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
        element: <Home  />,
      },
      {
        path: "movies",
        element: <MoviesPage {...{ movies, isMoviesLoading }}/>,
      },
      {
        path: "search",
        element: <SearchPage {...{handleSearchResults, searchResults, isSearchingResult}}/>
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
    <AnimatePresence initial={false} >
      <RouterProvider router={router} />
    </AnimatePresence>
    </>
  );
}
export default App;

// axios.get(`${params.id}${params.mediaType}`)
