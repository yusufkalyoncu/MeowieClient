import React from 'react'
import loadingSvg from '../../images/loading.svg'
import { getImageUrl } from '../../utils/ImageUrl'

const DetailBody = ({movie}) => {
  return (
    <div className='-mt-[400px] flex flex-col md:flex-row items-center relative z-10 mobile:block pl-0 md:pl-24'>
        <img src={movie ? getImageUrl.originalSize(movie.imageURL) : loadingSvg} alt=''
        className='w-[400px] min-w-[400px] h-[600px]'/>
        <div className='px-6 flex flex-col items-center md:items-start gap-3'>
            <p className='text-3xl md:text-5xl bold pt-4 md:pt-16'>{movie ? movie?.name : "Loading..."}</p>
            <ul className='flex items-center gap-2'>
                {movie ? movie?.genres.map((genre, i)=>{
                    return(
                        <li className={`px-3 py-1.5 bg-[#c23442] rounded-lg text-sm`} key={i}>
                            {genre}
                        </li>
                    )
                }): ""}
            </ul>
            <p className='opacity-80 text-xl pt-2 pr-2 md:pr-96'>{movie?.description}</p>
        </div>
    </div>
  )
}

export default DetailBody
