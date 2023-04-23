import React, { useState } from 'react'
import Rate from './Rate'

const CommentList = (props) => {
  const [rating, setRating] = useState(0)
  return (
    <div className='flex justify-center pt-16 flex-col items-center'>
        <hr className='w-[80%] pb-16'/>
        {props.comments ? "Boş knk" : 
        
        <p className='text-3xl font-bold text-center'>No comments, be the first to comment</p>
        }
        <hr className='w-[80%] mt-16 mb-10'/>
        
        <div className='flex flex-col w-[80%] rounded-3xl items-center bg-[#505f69]'>
            <p className='text-2xl font-bold m-2 mt-4 pb-3 pt-4 text-[#ebebf0]'>Rate this movie 1 to 10 paw</p>
            <Rate rating={rating} onRating={rate => setRating(rate)}/>
            {rating > 0 ? <p className='font-bold text-xl'>{`${rating}/10`}</p> : ""}
            <div className='w-[90%] h-[200px] bg-[#505f69] rounded-3xl m-6'>
                <textarea id="message" rows="5" className="block p-8 text-xl w-full h-full resize-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            </div>
        </div>
    </div>
  )
}

export default CommentList