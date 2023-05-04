import React from 'react'

const CommentCard = ({comment}) => {

  return (
    <div className="mx-auto rounded overflow-hidden shadow-lg flex items-center w-[480px] sm:w-[720px]">
      <img className="w-12 h-12 rounded-full mr-4" src={`https://localhost:7208/api/Images/username.png`} alt="Profil Resmi" />
      <div className="flex-1">
        <div className="font-bold text-xl mb-2">{comment.username}</div>
        <p className="text-gray-400 text-base break-all">{comment.content}</p>
      </div>
    </div>
  );
}

export default CommentCard
