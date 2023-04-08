import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RowMovie from './RowMovie'

const Row = ({title, fetchURL, rowId, count}) => {
  const[movies, setMovies] = useState([])

  useEffect(()=>{
    axios.get(fetchURL).then((response)=>{
      setMovies(response.data.movies)
    })

  },[fetchURL])

  return (
    <>
    <div className='w-full h-auto justify-center text-center'>
        <h2 className='text-white font-bold md:text-xl p4 '>{title}</h2>
        <div className='relative flex items-center group'>
          <div id={'slider'+rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {
              movies.length > 0
              ?
              movies.map((item, id)=>(<RowMovie key={id} item={item}/>))
              :
              Array.from({ length: count }, (_, index) => (
                <RowMovie key={index} item={null} />
              ))
            }
          </div>
        </div>
    </div>
    </>
  )
}

export default Row
