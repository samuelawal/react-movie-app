import React from "react";
import { IMG_PATH } from "../../constants";
import { Link } from "react-router-dom";
const MovieCard = ({ movies }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
    
      {movies.map((movie, idx) => {
        return (
          <Link to={`/overview/${movie.media_type}/${movie.id}`} key={idx} className="mb-4 md:mb-0">
            <div className='h-full w-full  media_element'>
              <img
                src={IMG_PATH + movie.poster_path}
                className='media_img '
                width='100%'
              />
              <p className="md:text-left text-center text-sm md:text-base">{!movie.title ? movie.name : movie.title}</p>
            </div>
          </Link>
        );
      })}

    </div>
  );
};

export default MovieCard;
