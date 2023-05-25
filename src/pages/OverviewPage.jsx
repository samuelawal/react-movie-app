import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/organisms/NavBar'
import { IMG_PATH } from '../constants'

const OverviewPage = ({handleSetSelectedMovieType, handleFetchDetailsOverview, details}) => {
  const {id, mediaType} = useParams()
  useEffect(()=>{
    const fetchDetails = async () => {
     await handleFetchDetailsOverview(id, mediaType)
    }
    fetchDetails()
  }, [id, mediaType])
  return (
    <div className='w-full h-screen bg-cover bg-no-repeat' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),url(${IMG_PATH + details.poster_path})`, backgroundPosition: '50% 30%'}}>
      <NavBar/>
      <div>
      <h1 className='movie_title'>
       {!details.title ? details.original_name: details.title}
      </h1>
       <p>{details.overview}</p> 
      </div>

    </div>
  )
}

export default OverviewPage