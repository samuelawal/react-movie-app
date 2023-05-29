import { useEffect, useReducer } from "react";
import { SET_DETAIL_OVERVIEW } from "../constants";
import { IMG_PATH } from "../constants";
import axios from "../constants/index";

const initialState = {
  details: {},
  detailIsLoading: false,
  status: "idle",
  error: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "pending":
      return {
        ...state,
        details: [],
        status: "fetching",
        detailIsLoading: true,
      };
    case "success":
      return {
        ...state,
        details: action.payload.details,
        status: "fetched",
        detailIsLoading: false,
      };
    case "failed":
      return {
        ...state,
        status: "error",
        error: action.payload.error,
      };
    default:
      return state;
  }
}
export default function useDetailsOverview() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchOverviewDetails = async (movie_id, media_type) => {
    try {
      dispatch({ type: "pending" });
      const movieOverview = await axios.get(`/${media_type}/${movie_id}`);
      const movieCasts = await axios.get(`/${media_type}/${movie_id}/credits`)
      const movieRecommendations = await axios.get(`/${media_type}/${movie_id}/recommendations`)
      Promise.all([movieOverview, movieCasts, movieRecommendations]).then(responses => {
        const [movieOverview, movieCasts, movieRecommendations] = responses;
        const movieDetails = {
          id: movieOverview.data.overview,
          casts: movieCasts.data.cast,
          title: movieOverview.data.original_title,
          year_of_release: movieOverview.data.release_date,
          air_date: movieOverview.data.first_air_date,
          name: movieOverview.data.original_name,
          genres: movieOverview.data.genres,
          overview: movieOverview.data.overview,
          recommendations: movieRecommendations.data.results,
          poster: IMG_PATH + movieOverview.data.poster_path,
          backdrop: IMG_PATH + movieOverview.data.backdrop_path
        }
       console.log(movieDetails)
        dispatch({ type: "success", payload: { details: movieDetails } });
      })
    } catch (err) {
      dispatch({ type: "failed", payload: { error: err.message } });
      console.log(err.message);
    }
  };

  return {
    ...state,
    reload: fetchOverviewDetails,
  };
}
