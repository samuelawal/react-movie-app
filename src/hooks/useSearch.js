import { useReducer } from "react";
import axios from "../constants/index";
const initialState = {
  searchResults: [],
  status: "idle",
  error: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "pending":
      return {
        ...state,
        status: "fetching",
      };
    case "success":
      return {
        ...state,
        searchResults: action.payload.searchResults,
        status: "fetched",
      };
      case "failed":
        return {
            ...state,
            status: "error",
            error: action.payload.error
        }
        default:
            return state;
  }
}
export default function useSearchOverview(){
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchSearchDetails = async(search_req) => {
        try {
            dispatch({type: "pending"});
            const searchResponse = await axios.get(`/search/multi?query=${search_req}`)
            const searchResult = !searchResponse.data.results ? searchResponse.data.known_for : searchResponse.data.results;
            dispatch({type: "success", payload: {searchResults: searchResult}})
        } catch(err) {
            dispatch({type: "failed", payload: {error: err.message}});
            console.log(err.message)
        }
    }
    return {
        ...state,
        reload: fetchSearchDetails,
    }
}
