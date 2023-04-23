import React, { useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaw} from '@fortawesome/fontawesome-free-solid'
import {PropTypes} from 'prop-types'
const Rate = ({count, rating, color, onRating}) => {

  const [hoverRating, setHoverRating] = useState(0)

  const getColor = index =>{
    if(hoverRating >= index){
      return color.filled
    }
    else if(!hoverRating && rating >= index){
      return color.filled
    }
    return color.unfilled
  }

  const pawRating = useMemo(()=>{
    return Array.from({ length: 10 }).map((_, index) => (
      <FontAwesomeIcon
        icon={faPaw}
        className='cursor-pointer p-1 fa-2x'
        key={index+1}
        onClick={()=>onRating(index+1)}
        style={{color: getColor(index+1)}}
        onMouseEnter={()=> setHoverRating(index+1)}
        onMouseLeave={()=> setHoverRating(0)}
      />
    ))
  },[count, rating, hoverRating])
  return (
    <div>
      {
        pawRating
      }
    </div>
  )
}

Rate.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onRating: PropTypes.func,
  color: PropTypes.shape({
    filled: PropTypes.string,
    unfilled: PropTypes.string
  }),
}

Rate.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: '#ff6473',
    unfilled: '#ebebf0'
  },
}


export default Rate
