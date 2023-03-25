import React from 'react'

const RowMovie = ({item}) => {
  return (
    <div className='w-[160px] h-[90px] sm:w-[200px] sm:h-[113px] md:w-[240px] md:h-[135px] lg:w-[280px] lg:h-[158px] inline-block cursor-pointer relative p-2'>
        <img className='w-full h-full object-cover block' src={`https://image.tmdb.org/t/p/w500${item?.bannerURL}`} alt={item?.title}></img>
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
            <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full w-full text-center'>{item?.name}</p>
        </div>
    </div>
  )
}

export default RowMovie
