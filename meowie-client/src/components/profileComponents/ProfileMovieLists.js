import React, { useContext, useEffect, useState } from 'react'
import MovieListCard from './MovieListCard'
import MovieListContext from '../../context/MovieListContext'
import AddMovieToListDialog from '../common/AddMovieToListDialog'

const ProfileMovieLists = ({username}) => {
  const [movieLists, setMovieLists] = useState(null)
  const {getUserMovieLists} = useContext(MovieListContext)

  useEffect(() => {
    getMovieLists()
  }, [username])

  const getMovieLists = async () =>{
    getUserMovieLists(username).then(lists => {
      setMovieLists(lists);
    })
  }

  return (
    <div className="flex flex-wrap">
      {
        movieLists ?
        movieLists.map((movieList, index) => (
          <div className="flex-shrink-0 mx-4 my-4" key={movieList.id}>
            <MovieListCard movieList={movieList} key={index} callbackFunc={getMovieLists}/>
          </div>
        ))
        :
        "not found"
      }
    </div>
  )
}

export default ProfileMovieLists
