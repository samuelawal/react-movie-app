import React from 'react'
import { IMG_PATH } from '../../constants'
const MovieCard = ({movies}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {movies.map((movie, idx) => {
          return (  
              <div key={idx} className='h-full w-full  media_element'>
                <img src={IMG_PATH + movie.poster_path} className="media_img object-none object-bottom" width="100%"/>
                <p>{movie.title}</p>
              </div>            
          )
        })}
    </div>
  )
}

export default MovieCard