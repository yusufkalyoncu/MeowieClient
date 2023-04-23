import React, { useEffect } from 'react'
import loadingSvg from '../../images/loading.svg'
import { useNavigate } from "react-router-dom";
import { getImageUrl } from '../../utils/ImageUrl';

const ListMovieItem = ({item}) => {
  const navigate = useNavigate()
    return (
        <div onClick={()=>navigate(`/detail/${item.id}`)} 
        className=' md:w-[324px] md:h-[480px] sm:w-[421px] sm:h-[624px] inline-block cursor-pointer relative'>
            
                { item ? 
                <img className='w-full h-full object-cover block' 
                  src={getImageUrl.originalSize(item?.imageURL)} alt={item?.title}>
                </img>
                :
                <img className='w-full h-full object-cover block' 
                  src={loadingSvg} alt={"Loading..."}>
                </img>
                }
            
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white '>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full w-full text-center'>{item?.name}</p>
            </div>
        </div>
        
      )
}

export default ListMovieItem
