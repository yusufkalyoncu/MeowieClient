import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const MovieListCard = ({movieList}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  const navigate = useNavigate()
  return (
    <div className='w-48'>
      <div
        className="bg-gray-700 shadow-md rounded-md relative w-full h-24 flex flex-col justify-center items-center cursor-pointer"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={()=>navigate(`/list-detail/${movieList?.id}`)}
      >
        <div className="text-white font-bold text-sm absolute top-2 left-2">
          {movieList.movieCount} movies
        </div>
        <div className="text-white font-bold text-sm absolute top-2 right-2">
          {movieList.likesCount} likes
        </div>
        <div className={`card-bottom h-10 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-white text-sm text-center">
            <div className="mb-1">View</div>
          </div>
        </div>
      </div>
      <div className="truncate text-center">{movieList.title}</div>
    </div>
  );
}

export default MovieListCard
