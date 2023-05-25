import { useEffect, useReducer } from "react";
import { SET_DETAIL_OVERVIEW } from "../constants";
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
            dispatch({type: 'pending'});
            const response = await axios.get(`/${media_type}/${movie_id}`)
            const data = response.data;
            console.log(data)
            dispatch({type: "success", payload: {details: data}});
        }catch(err) {
            dispatch({type: "failed", payload: {error: err.message}});
            console.log(err.message)
        }
    };
  

    return {
        ...state,
        reload:  fetchOverviewDetails
    }
}
