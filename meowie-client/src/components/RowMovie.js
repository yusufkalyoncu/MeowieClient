import React from 'react'
import loadingGif from '../images/loading.gif'
const RowMovie = ({item}) => {
  return (
    <div className='w-[108px] h-[160px] sm:w-[135px] sm:h-[200px] md:w-[160px] md:h-[240px] lg:w-[190px] lg:h-[280px] inline-block cursor-pointer relative p-2'>
        <img className='w-full h-full object-cover block' 
          src={`${item ? (`${item.imageURL}`) : loadingGif}`}alt={item?.title}>
        </img>
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
            <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full w-full text-center'>{item?.name}</p>
        </div>
    </div>
  )
}

export default RowMovie
