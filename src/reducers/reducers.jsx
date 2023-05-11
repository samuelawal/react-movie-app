import { SET_LOADING, SET_MOVIES, SET_SERIES, RESET_STATE } from "../constants";

export const APP_INITIAL_STATE = {
    loading: false,
    movies: [],
    series: [],
    loadingText: '',
}
const AppReducer = (state, action) => {
    switch(action.type) {
        case SET_MOVIES:
            return {...state, movies: action.movies}
        case SET_SERIES:
            return {...state, series: action.series}
        case SET_LOADING:
            return {...state, loading: action.value, loadingText: action.text}
        case RESET_STATE: 
            return {
                ...state,
                loading: false
            }
            default: 
            return state
    }
}
export default AppReducer