import { useEffect, useReducer } from "react";
import axios from "../constants/index";
const initialState = {
  series: [],
  status: "idle",
  error: null,
  loading: false,
};
function seriesReducer(state, action) {
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
        series: action.payload.series,
      };
    default:
      return state;
  }
}
export default function useSeries() {
  const [state, dispatch] = useReducer(seriesReducer, initialState);
  const fetchSeries = async () => {
    try {
      dispatch({ type: "pending" });
      const response = await axios.get("/trending/tv/day");
      const series = response.data.results;
      dispatch({ type: "success", payload: { series: series } });
    } catch (err) {
      dispatch({ type: "failed", payload: { error: err.message } });
      console.log(err.message);
    }
  };
  useEffect(()=> {
    fetchSeries()
  }, [])
    return {
        ...state,
        reload: fetchSeries
    }
}
