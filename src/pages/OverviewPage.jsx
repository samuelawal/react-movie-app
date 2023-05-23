import React from 'react'
import { useParams } from 'react-router-dom'

const OverviewPage = () => {
  const {id, mediaType} = useParams()
  return (
    
    <div>OverviewPage

      {id}
    </div>
  )
}

export default OverviewPage