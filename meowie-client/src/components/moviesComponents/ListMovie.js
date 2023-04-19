import React, { useState, useEffect } from 'react'
import ListMovieItem from './ListMovieItem'
import axios from 'axios'
import { Pagination } from '@mui/material'
import UrlService from '../../UrlService'
import ListMovieItemSkeleton from '../skeletons/ListMovieItemSkeleton'

const ListMovie = ({fetchURL, count}) => {
    const [movies, setMovies] = useState([])
    const [totalMovieCount, setTotalMovieCount] = useState(null)
    const [url,setUrl] = useState(fetchURL)

    useEffect(()=>{
        axios.get(url).then((response)=>{
            setMovies(response.data.movies)
            setTotalMovieCount(response.data.totalMovieCount)
          })
        window.scrollTo(0, 0)
      },[url])
      
      const handleChange = (e, value) => {
        setUrl(UrlService.movie.MoviesURL(count,value,false))
      };

  return (
    <>
    <div className='flex flex-col justify-center pt-24'>
        <div className='flex justify-center'>
            <div className="grid grid-cols-3 gap-4">
            {
                movies.length > 0
                ?
                movies.map((item, id)=>(<ListMovieItem key={id} item={item}/>))
                :
                Array.from({ length: count }, (_, index) => (
                  <ListMovieItemSkeleton key={index}/>
              ))
            }           
            </div>
        </div>
        <div className='flex justify-center items-center pt-6 pb-4'>
        {
            totalMovieCount ? 
            <Pagination
            count={Math.floor(totalMovieCount/count)}
            size='large'
            color='primary'
            onChange={handleChange}
            sx={{
                "& .MuiPaginationItem-page": { color: "white" },
                "& .MuiPaginationItem-root.Mui-selected": { backgroundColor: "#ff6473" },
                "& .MuiPaginationItem-root.Mui-selected:hover": { backgroundColor : "#eb5e6b"},
                "& .MuiSvgIcon-root" : {color : "white"},
                "& .MuiPaginationItem-ellipsis" : {color : "white"},
                "& .MuiPaginationItem-root:hover" : {color : "#9e9d9d"}
            }}
            />
            : <p>Loading...</p>
        }
        </div>
    </div>
    </>
  )
}

export default ListMovie



