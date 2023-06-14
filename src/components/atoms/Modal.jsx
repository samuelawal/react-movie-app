import { IMG_PATH } from "../../constants";
import { FaPlay, FaTimes } from "react-icons/fa";
import { getMovieFullYear } from "../../utils";
import { motion } from "framer-motion";
import MovieCard from "../organisms/MovieCard";
const Modal = ({
  isOpen,
  onClose,
  movie_title,
  children,
  detail_type,
  recommendations,
  isdetailsLoading,
  genres,
  ratings,
  overview,
  casts,
  poster_path,
  number_of_episodes,
  first_air_date,
}) => {
  let castsToShow = casts;
  let filteredRecommendations = recommendations;
  if (casts && casts.length > 5) {
    castsToShow = casts.slice(0, 5);
  }
  if (recommendations && recommendations.length > 12) {
    filteredRecommendations = recommendations.slice(0, 12);
  }
  const rounded_rating = Number(ratings).toFixed(1);
  let ratingColor;
  if (rounded_rating < 5) {
    ratingColor = "text-red-500 ml-1";
  } else if (rounded_rating < 7) {
    ratingColor = "text-orange-500 ml-1";
  } else {
    ratingColor = "text-green-500 ml-1";
  }
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <>
      {isOpen && !isdetailsLoading && (
        <motion.div
          initial='hidden'
          animate='visible'
          exit='exit'
          variants={dropIn}
          className='fixed inset-0 mt-0  z-20 flex justify-center'
        >
          <div
            className='fixed inset-0 bg-black opacity-75'
            onClick={onClose}
          ></div>
          <div className='bg-zinc-900 mt-0 md:mt-10  w-3/3 md:w-2/3 rounded-md shadow-md max-h-screen overflow-y-auto z-50'>
            <div
              className='w-full h-4/6 md:h-5/6 relative'
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.75)),url(${poster_path})`,
                backgroundPosition: "50% 30%",
              }}
            >
              <div className=' p-4 absolute right-0'>
                <FaTimes size='2em' onClick={onClose} />
              </div>
              <div className='p-5  more_info_title_contiainer '>
                <h1 className='more_info_title'>{movie_title}</h1>
                <div className='mt-5'>
                  <button className='myBtn'>Play</button>
                </div>
              </div>
            </div>
            {children}
            <div className='container p-5'>
              <div className='grid grid-cols-3 gap-6'>
                <div className='col-span-3 md:col-span-2'>
                  <div className='flex'>
                    <p className='text-green-500 small mr-2'>80% match</p>
                    <p className='small text-gray-400'>
                      {getMovieFullYear(first_air_date)}, {number_of_episodes}{" "}
                      episodes .
                    </p>
                  </div>
                  <p className='small mt-3 leading-loose'>{overview}.</p>
                </div>
                <div className='md:col-span-1 col-span-3 break-words'>
                  <p className='small text-gray-400 '>
                    Genres:
                    {genres.map((movie_genre) => (
                      <span className='text-white ml-1' key={movie_genre.id}>
                        {movie_genre.name},
                      </span>
                    ))}
                  </p>
                  <p className='small text-gray-400 mt-3'>
                    Casts:
                    <span className='text-white small ml-1' key={casts.id}>
                      {castsToShow
                        ? castsToShow.map((cast) => cast.name).join(", ")
                        : "Loading.."}
                      ,{" "}
                      <a href='#cast' className='movie_link'>
                        more
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className='mt-5 pt-5'>
                <h3 className='h1'>More Like this</h3>
                <div className='mt-5'>
                  {!recommendations.length ? (
                    <p className='text-red-500 text-sm text-center'>
                      No recommendations found!!
                    </p>
                  ) : (
                    <MovieCard movies={filteredRecommendations} />
                  )}
                </div>
              </div>
              <div className='mt-5 pt-5' id='cast'>
                <h3 className='h1'>About {movie_title}</h3>
                <div className='mt-3'>
                  <p className='small text-gray-400 leading-relaxed'>
                    Cast:{" "}
                    <span className='text-white small ml-1' key={casts.id}>
                      {casts
                        ? casts.map((cast) => cast.name).join(" , ")
                        : "Loading.."}
                    </span>
                  </p>
                  <p className='small text-gray-400 mt-4'>
                    Genres:{" "}
                    {genres.map((movie_genre) => (
                      <span className='text-white ml-1' key={movie_genre.id}>
                        {movie_genre.name},
                      </span>
                    ))}
                  </p>
                  <p className='small text-gray-400 mt-4'>
                    Ratings:{" "}
                    <span className={ratingColor}>{rounded_rating} / 10.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};
export default Modal;
