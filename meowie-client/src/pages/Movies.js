import React from 'react'
import ListMovie from '../components/moviesComponents/ListMovie'
import UrlService from '../UrlService'

const Movies = () => {
  return (
    <div>
        <ListMovie count={20} fetchURL={UrlService.movie.MoviesURL(20,0,false)}/>
    </div>
  )
}

export default Movies
