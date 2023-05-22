import React from 'react'
import NavBar from '../components/organisms/NavBar'
import { IMG_PATH } from '../constants'


const Home = ({movies, loading}) => {
  console.log(movies)
  return (
    <div>
      <NavBar/>
      <section className='container mx-auto mt-10'>
        <>
        <h2>Popular Movies</h2>
        {loading ? "Fetching..." : movies.map((movie, idx) => {
          return (  
              <div key={idx}>
                <img src={IMG_PATH + movie.poster_path}/>
                <p>{movie.title}</p>
              </div>            
          )
        })}
        </>
      </section>
    </div>
  )
}

export default Home