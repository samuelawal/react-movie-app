import { SET_MOVIES, SET_SELECTED_MOVIE_TYPE } from "../constants";
import AppReducer, { APP_INITIAL_STATE } from "../reducers/reducers";
import useDetailsOverview from "./useDetailsOverview";
import useMovies from "./useMovies";
import useSeries from './useSeries'
import useSearch from './useSearch'
import React, { useEffect, useMemo, useReducer } from "react";

export default function useApp() {
  const [state, dispatch] = useReducer(AppReducer, APP_INITIAL_STATE);
  const { movies, error: moviesError, status: moviesStatus, loading } = useMovies();
  const { series, error: seriesError, status: seriesStatus, reload: fetchTvShows} = useSeries();
  const { searchResults, error: searchError, status: searchResultStatus, reload: handleSearchResults} = useSearch()
  const {details, error: detailsError, status: detailsStatus, reload: handleFetchDetailsOverview} = useDetailsOverview()
 
      useEffect(() => {
        dispatch({ type: SET_MOVIES, movies: movies });
      }, [movies]);
 
  const handleSetSelectedMovieType =
    (selectedId, selectedType) => { 
      dispatch({type: SET_SELECTED_MOVIE_TYPE, movieType: selectedType, movieId: selectedId})
    }

  return {
    ...state,
    details,
    detailsError,
    isSearchingResult: searchResultStatus === 'fetching',
    isdetailsLoading: detailsStatus === 'fetching',
    isSeriesLoading: seriesStatus === "fetching",
    searchResults,
    searchError,
    moviesError,
    seriesError,
    series,
    isStatusLoading: seriesStatus === 'fetching',
    handleSetSelectedMovieType,
    handleSearchResults,
    fetchTvShows,
    handleFetchDetailsOverview,
    loading,
    isMoviesLoading: movies.length < 1 && moviesStatus === "fetching",
  };
};



