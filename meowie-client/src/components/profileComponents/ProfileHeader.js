import React from 'react'
import UrlService from '../../UrlService'
import ProfileHeaderSkeleton from '../skeletons/ProfileHeaderSkeleton'
import profilePicture from '../../images/profile-picture.png'

const ProfileHeader = ({name, username, profileImage, biography}) => {
    return name ? 
    (
        <div className="flex flex-col items-center py-4 bg-[#505f69] shadow-xl pt-24">
          <img
            className="w-28 h-28 rounded-full mb-2"
            src={profileImage ? UrlService.image.GetProfileImage(profileImage) : profilePicture}
            alt="Profile"
          />
          {name && (
            <h1 className="text-4xl font-bold text-center mb-2">{name}</h1>
          )}
          {username && (
            <h2 className="text-xl font-medium text-[#d2d2d7] text-center mb-2 ">
              @{username}
            </h2>
          )}
          {
            biography ? 
            <h3 className='text-lg font-medium text-center w-[70%] sm:w-[50%]'>{biography}</h3>
            :
            ""
          }
        </div>
      )
      :
      <ProfileHeaderSkeleton/>
}

export default ProfileHeader
