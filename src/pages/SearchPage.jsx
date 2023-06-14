import React, {useEffect, useState} from 'react'
import { useOutletContext } from 'react-router-dom'
import MovieCard from '../components/organisms/MovieCard'
import Loader from '../components/atoms/Loader'

// FIXME: Please find a better way of doing this

const SearchPage = ({handleSearchResults, searchResults, isSearchingResult}) => {
  const [query] = useOutletContext()
  const [mobileSearchValue, setMobileSearchValue] = useState()
  const handleValueChange = (event) => {
    setMobileSearchValue(event.target.value);
  };
  useEffect(() => {
    const searchQuery = async () => {
      if(query) {
        await handleSearchResults(query)
      }
      if(mobileSearchValue) {
        await handleSearchResults(mobileSearchValue)
      }
    }
    searchQuery()
  }, [mobileSearchValue, query])
  return (
    <div>
      <div className='mx-6 md:hidden block'>
      <input type='text' value={mobileSearchValue} onChange={handleValueChange} className=' w-full d-block text-sm search_input px-3 rounded py-2' placeholder='Search for movies, series...'/>
      </div>
     {
      isSearchingResult ? (
       <Loader/>
      ) : (
        <section className='container mx-auto mt-10'>  
        <div className="m-3 md:m-0 md:mb-4">
          <h2 className='text-xl'>Search results found :</h2>
        </div>
          <div className='m-3 mb-2 md:m-0"'>
          {!searchResults.length ? (
            <p className='text-center  m-5'>No result found!</p>
          ) : <MovieCard movies={searchResults}/>}         
          </div>
        </section>
      )
     }
    </div>
  )
}

export default SearchPage