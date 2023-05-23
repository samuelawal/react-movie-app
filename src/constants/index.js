import axios from "axios"
export const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWQ4YmFmOWI3MGZiYTgxNTFiOWY0MDgyYWYwMTVlNSIsInN1YiI6IjY0NWNhZWM5NzdkMjNiMDE3MDM5NDI3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZBmU-H1cJzFaHxipMipZUvyiw5xHT0WdO6QkjnmW6a4`
    }
});

export const SET_LOADING = 'SET_LOADING';
export const SET_DETAIL_OVERVIEW = 'SET_DETAIL_OVERVIEW'
export const SET_MOVIES = 'SET_MOVIES';
export const SET_SERIES = 'SET_SERIES';
export const RESET_STATE = "RESET_STATE";
export const SET_SELECTED_MOVIE_TYPE = "SET_SELECTED_MOVIE_TYPE"
