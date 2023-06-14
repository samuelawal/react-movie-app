import React, { useEffect } from 'react'
import NavBar from "../components/organisms/NavBar";
import MovieCard from '../components/organisms/MovieCard';
import Loader from '../components/atoms/Loader';

const SeriesPage = ({series, fetchTvShows, isSeriesLoading}) => {

  return (
    <div>
      <section className='container mx-auto mt-10'>
        <div className='m-3 md:m-0 md:mb-4'>
        <h2>Trending TV shows</h2>
        <p className="text-sm">Get the latest trending tv series at Movie time.</p>
        </div>
        {isSeriesLoading ? <Loader/> : <MovieCard movies={series}/>}
      </section>
    </div>
  )
}

export default SeriesPage