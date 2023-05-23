import React from 'react'
import NavBar from '../components/organisms/NavBar'

import MovieCard from '../components/organisms/MovieCard'


const Home = ({movies, loading}) => {
  return (
    <div>
      <NavBar/>
      <section className='container mx-auto mt-10'>
        <h2>Trending now</h2>
        {loading ? "Fetching..." : <MovieCard movies={movies}/>}
      </section>
    </div>
  )
}

export default Home