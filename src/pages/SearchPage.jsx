import React, {useEffect} from 'react'
import { useOutletContext } from 'react-router-dom'
import MovieCard from '../components/organisms/MovieCard'

const SearchPage = ({handleSearchResults, searchResults, isSearchingResult}) => {
  const [query] = useOutletContext()
  console.log(query)
  useEffect(() => {
    const searchQuery = async () => {
        await handleSearchResults(query)
    }
    searchQuery()
  }, [query])
  return (
    <div>
     {
      isSearchingResult ? (
        "Loading..."
      ) : (
        <div className='container mx-auto'>
          <h2>Search results found :</h2>
          {!searchResults.length ? (
            <p className='text-center text-red-500'>No result found!</p>
          ) : <MovieCard movies={searchResults}/>}         
        </div>
      )
     }
    </div>
  )
}

export default SearchPage