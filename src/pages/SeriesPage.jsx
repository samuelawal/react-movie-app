import React, { useEffect } from 'react'
import NavBar from "../components/organisms/NavBar";
import MovieCard from '../components/organisms/MovieCard';

const SeriesPage = ({series, fetchTvShows, isSeriesLoading}) => {
// useEffect(()=> {
//   const handleFetchTvShows = async ()=> {
//     return await fetchTvShows()
//   }
//   handleFetchTvShows()
// },[])
  return (
    <div>
      <NavBar />
      <section className='container mx-auto mt-10'>
        <h2>Trending TV shows right now</h2>
        {isSeriesLoading ? "Fetching..." : <MovieCard movies={series}/>}
      </section>
    </div>
  )
}

export default SeriesPage