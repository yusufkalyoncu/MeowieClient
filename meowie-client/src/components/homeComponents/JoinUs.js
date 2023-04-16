import React from 'react'
import { MuiButton } from '../materialui/MuiButton'

const JoinUs = () => {
  return (
    <>
    <div className=' w-full h-auto justify-center text-center pb-20'>
        <h2 className='text-2xl md:text-4xl font-bold'>
            Rate the movies you've watched<br/>
            Save what you plan to watch<br/>
            Share your lists with followers 
        </h2>
        <MuiButton className='w-48 md:w-60'>Join Us</MuiButton>
    </div>
    </>
  )
}

export default JoinUs
