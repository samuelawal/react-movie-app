import { useEffect, useReducer } from "react";
import axios from "../constants/index";
import AppReducer, { APP_INITIAL_STATE } from "../reducers/reducers";
const initialState = {
  movies: [],
  status: "idle",
  error: null,
  loading: false,
};
function movieReducer(state, action) {
  switch (action.type) {
    case "pending":
      return {
        ...state,
        status: "fetching",
        loading: true,
        error: null,
      };
    case "failed":
      return {
        ...state,
        status: "error",
        loading: false,
        error: action.payload.error,
      };
    case "success":
      return {
        ...state,
        status: "fetched",
        loading: false,
        movies: action.payload.movies,
      };
    default:
      return state;
  }
}
export default function useMovies() {
  const [state, dispatch] = useReducer(movieReducer, initialState);
  const fetchMovies = async () => {
    try {
      dispatch({ type: "pending" });
      const response = await axios.get('/movie/popular');
      const movies =  response.data.results;
      dispatch({ type: "success", payload: { movies: movies } });
    } catch (err) {
      dispatch({ type: "failed", payload: { error: err.message } });
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return {
    ...state,
    reload: fetchMovies,
  };
}
