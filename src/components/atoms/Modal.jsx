import { IMG_PATH } from "../../constants";
import { FaPlay } from "react-icons/fa";
import { getMovieFullYear } from "../../utils";
const Modal = ({
  isOpen,
  onClose,
  movie_title,
  children,
  detail_type,
  isdetailsLoading,
  genres,
  overview,
  casts,
  poster_path,
  number_of_episodes,
  first_air_date,
}) => {
  let castsToShow = casts;
if (casts && casts.length > 5) {
  castsToShow = casts.slice(0, 5); 
}
  return (
    <>
      {isOpen && !isdetailsLoading && (
        <div className='fixed inset-0 mt-10 z-20 flex  justify-center'>
          <div className='fixed inset-0 bg-black opacity-75'></div>
          <div className='bg-zinc-900 w-2/3  rounded-md shadow-md max-h-screen overflow-y-auto z-50'>
            <div
              className='w-full h-5/6'
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.75)),url(${poster_path})`,
                backgroundPosition: "50% 30%",
              }}
            >
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
                <div className='col-span-2'>
                  <div className='flex'>
                    <p className='text-green-500 small mr-2'>80% match</p>
                    <p className='small text-gray-400'>
                      {getMovieFullYear(first_air_date)}, {number_of_episodes}{" "}
                      episodes .
                    </p>
                  </div>
                  <p className='small mt-3 leading-loose'>{overview}</p>
                </div>
                <div>
                  <p className='small text-gray-400 '>
                    Genres:
                    {genres.map((movie_genre) => (
                      <span className='text-white ml-1' key={movie_genre.id}>
                        {movie_genre.name},
                      </span>
                    ))}
                  </p>
                  <p className='small text-gray-400 mt-3'>
                    Casts:{" "}
                    <span className='text-white small ml-1' key={casts.id}>
                      {castsToShow ? castsToShow.map((cast) => cast.name).join(", ") : 'Loading..'}
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-5 pt-5">
              <h3 className="h1">More Like this</h3>
              </div>
            </div>
            <button
              className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
