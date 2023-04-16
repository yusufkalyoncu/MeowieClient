import React from 'react'
import Card from './Card'
import loadingSvg from '../../images/loading.svg'

const Casts = (props) => {
  return (
    <div class="h-32 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
        {
        props.actors ?
        props.actors.map((actor)=>{
            return (
                <Card 
                onClick={""}
                imageURL={actor ? actor.imageURL : loadingSvg}
                name={actor ? actor.name : "undefined"}
                />
            )
        }) : ""}
    </div>
  )
}

export default Casts
