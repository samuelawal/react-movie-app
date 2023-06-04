import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/organisms/NavBar";
import Modal from "../components/atoms/Modal";
import { IMG_PATH } from "../constants";


const OverviewPage = ({
  isdetailsLoading,
  handleFetchDetailsOverview,
  details,
}) => {
  const { id, mediaType } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
 
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    const fetchDetails = async () => {
      await handleFetchDetailsOverview(id, mediaType);
    };
    fetchDetails();
  }, [id, mediaType]);

  return (
    <section>
      <Modal
        isOpen={modalOpen}
        isdetailsLoading={isdetailsLoading}
        onClose={closeModal}
        overview={details.overview}
        recommendations={details.recommendations}
        genres={details.genres}
        first_air_date={!details.air_date ? details.year_of_release : details.air_date}
        number_of_epsiodes={details.number_of_episodes}
        poster_path={details.poster}
        casts={details.casts}
        ratings={details.ratings}
        detail_type={details.type}
        movie_title={!details.title ? details.name : details.title}
      >

      </Modal>
      {isdetailsLoading ? (
        "Loading..."
      ) : (
        <div
          className='w-full h-screen bg-cover bg-no-repeat'
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),url(${
              details.poster
            })`,
            backgroundPosition: "50% 30%",
          }}
        >
          {/* <NavBar /> */}
          <div className='details_overview container mx-auto'>
            <div className='md:w-2/4 lg:w-2/4 w-4/4 m-3 md:m-0'>
              <h1 className='movie_title'>
                {!details.title ? details.name : details.title}
              </h1>
              <p className='text-slate-400 mt-5'>{details.overview}</p>
              <div className=''>
                <div className='mt-10 flex '>
                  <button className='myBtn'>Play</button>
                  <button
                    onClick={openModal}
                    className='myBtn mx-5 bg-white text-black'
                  >
                    More info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OverviewPage;
