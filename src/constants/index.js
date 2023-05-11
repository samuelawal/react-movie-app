import axios from "axios"
export default axios.create({
    baseUrl: "https://api.themoviedb.org/3/"
});
export const SET_LOADING = 'SET_LOADING';
export const SET_MOVIES = 'SET_MOVIES';
export const SET_SERIES = 'SET_SERIES';
export const RESET_STATE = "RESET_STATE";
