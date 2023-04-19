import React from 'react'

const Card = (props) => {
  return (
    <div onClick={props.onClick} className='mx-3 my-1.5 cursor-pointer '>
        <img src={props.imageURL} className='h-[300px]'/>
    </div>
  )
}

export default Card
