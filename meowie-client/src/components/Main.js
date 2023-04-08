import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'
import { MuiButton } from './materialui/MuiButton'

const Main = () => {
  const [movies, setMovies] = useState([])
  let movie = movies;
  useEffect(()=>{
    axios.get(requests.getRandomMovies(1)).then((response)=> {
      setMovies(response.data.movies[0]);
    })
  },[])
const truncateString = (str, num) => {
  if(str?.length > num){
    return str.slice(0, num)+'...';
  }
  return str;
}
return (
    
  <div className='flex flex-col justify-center w-[full] h-[650px] text-white'>
    <div className='w-full h-full'>
      <div className='relative w-full h-full'>
        <div className='absolute w-full h-full bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover md:object-cover' src={`https://image.tmdb.org/t/p/original${movie?.bannerURL}`} alt={movie?.name}/>
        <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-[#222831]"></div>
        <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-[#222831]"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#222831]"></div>
      </div>
      <div className='absolute w-full top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>{movie?.name}</h1>
        <div>
          <p className='text-gray-400 text-sm py-2'>Released: {new Date(movie.releaseDate).getUTCFullYear()}</p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
          {truncateString(movie?.description, 150)}
          </p>
        </div>
        <MuiButton className='w-36'>View</MuiButton>

      </div>
    </div>
  </div>
)


}

export default Main

/*


*/