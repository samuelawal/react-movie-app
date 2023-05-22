import { SET_MOVIES } from "../constants";
import AppReducer, { APP_INITIAL_STATE } from "../reducers/reducers";
import useMovies from "./useMovies";
import React, { useEffect, useMemo, useReducer } from "react";

export default function useApp() {
  const [state, dispatch] = useReducer(AppReducer, APP_INITIAL_STATE);
  const { movies, error: moviesError, status: moviesStatus, loading } = useMovies();
  useMemo(() => {
      useEffect(() => {
        console.log(state)
        dispatch({ type: SET_MOVIES, movies: movies });
      }, [movies]);
  }, [])
  return {
    ...state,
    moviesError,
    loading,
    isMoviesLoading: movies.length < 1 && moviesStatus === "fetching",
  };
};


