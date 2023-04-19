import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RowMovie from './RowMovie'
import RowMovieSkeleton from '../skeletons/RowMovieSkeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

const Row = ({title, fetchURL, rowId, count}) => {
  const[movies, setMovies] = useState([])

  useEffect(()=>{
    axios.get(fetchURL).then((response)=>{
      setMovies(response.data.movies)
    })

  },[fetchURL])

  return (
    <>
    <div className='w-full h-auto justify-center text-center pt-6 pb-4'>
        <h2 className='text-white font-bold md:text-xl pb-3'>{title}</h2>
        <div className='relative flex items-center group'>
          <div id={'slider'+rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {
              movies.length > 0
              ?
              movies.map((item, id)=>(<RowMovie key={id} item={item}/>))
              :
              Array.from({ length: count }, (_, index) => (
                <RowMovieSkeleton key={index}/>
            ))
            }
          </div>
        </div>
    </div>
    </>
  )
}

export default Row
