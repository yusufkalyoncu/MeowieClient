import React, { useContext, useEffect, useState } from 'react'
import MovieListCard from './MovieListCard'
import MovieListContext from '../../context/MovieListContext'
import AddMovieToListDialog from '../common/AddMovieToListDialog'

const ProfileMovieLists = ({username}) => {
  const [movieLists, setMovieLists] = useState(null)
  const {getUserMovieLists} = useContext(MovieListContext)

  useEffect(() => {
    getUserMovieLists(username).then(lists => {
      setMovieLists(lists);
    })
  }, [username])

  return (
    <div className="flex flex-wrap">
      {
        movieLists ?
        movieLists.map((movieList, index) => (
          <div className="flex-shrink-0 mx-4 my-4">
            <MovieListCard movieList={movieList} key={index}/>
          </div>
        ))
        :
        "not found"
      }
    </div>
  )
}

export default ProfileMovieLists
