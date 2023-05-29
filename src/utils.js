export function getMovieFullYear(movie_year) {
    const date = new Date(movie_year).getFullYear()
    return date
}