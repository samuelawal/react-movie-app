import React from 'react'
import MovieCard from "../components/organisms/MovieCard";


const MoviesPage = ({ movies, isMoviesLoading,  }) => {
  return (
    <div>
    
    <section className='container mx-auto mt-10'>
      <div className="m-3 md:m-0 md:mb-4">
      <h2>Trending now</h2>
      <p className="text-sm">Get the latest trending movies and tv series at Movie time.</p>
      </div>
      <div className="m-3 mb-2 md:m-0">
      {isMoviesLoading ? "Fetching..." : <MovieCard movies={movies} />}
      </div>
    </section>
  </div>
  )
}

export default MoviesPage