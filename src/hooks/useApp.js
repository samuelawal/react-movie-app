import { SET_MOVIES, SET_SELECTED_MOVIE_TYPE } from "../constants";
import AppReducer, { APP_INITIAL_STATE } from "../reducers/reducers";
import useDetailsOverview from "./useDetailsOverview";
import useMovies from "./useMovies";
import React, { useEffect, useMemo, useReducer } from "react";

export default function useApp() {
  const [state, dispatch] = useReducer(AppReducer, APP_INITIAL_STATE);
  const { movies, error: moviesError, status: moviesStatus, loading } = useMovies();
 
      useEffect(() => {
        dispatch({ type: SET_MOVIES, movies: movies });
      }, [movies]);

  const {details, error: detailsError, status: detailsStatus, reload: handleFetchDetailsOverview} = useDetailsOverview()
  const handleSetSelectedMovieType =
    (selectedId, selectedType) => { 
      dispatch({type: SET_SELECTED_MOVIE_TYPE, movieType: selectedType, movieId: selectedId})
    }

  return {
    ...state,
    details,
    detailsError,
    isdetailsLoading: detailsStatus === 'fetching',
    moviesError,
    handleSetSelectedMovieType,
    handleFetchDetailsOverview,
    loading,
    isMoviesLoading: movies.length < 1 && moviesStatus === "fetching",
  };
};



