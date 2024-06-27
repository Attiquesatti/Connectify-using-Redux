import React from 'react';
import coverImage from '../../assets/images/coverimage.jpg';
import { useSelector } from 'react-redux';
import { MdOutlineLocationOn } from 'react-icons/md';

const LeftSidebar = () => {
  const { data: images } = useSelector((state) => state.images);

  const profile = images.length > 0 ? images[8] : null; // Select the profile

  return (
    <div className='relative rounded-xl bg-gray-100 text-gray-700 shadow-xl font-header-family w-[20%]'>
      <div className="flex flex-col justify-center items-center px-1">
        <div className="relative flex flex-col items-center rounded-[20px]">
          <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover mt-1">
            <img src={coverImage} className="absolute flex h-32 w-full justify-center rounded-lg bg-cover" alt="Cover" />
            {profile && (
              <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px]">
                <img className="h-full w-full rounded-full" src={profile.profile} alt={profile.name} />
              </div>
            )}
          </div>
          <div className="mt-14 flex flex-col items-center">
            <h4 className="text-lg font-medium text-gray-900">
              {profile ? profile.name : 'Loading...'}
            </h4>
            <p className="text-sm font-small text-gray-800">{profile ? profile.bio.slice(0, 31) : 'Loading...'}</p>
            <p className="text-sm font-small text-gray-600 flex items-center"><MdOutlineLocationOn />{profile ? profile.location : 'Loading...'}</p>
          </div>
          <div className="mt-6 mb-3 flex gap-14">
            <div className="flex flex-col items-center justify-center">
              <p className="text-md font-semibold text-gray-800">17</p>
              <p className="text-sm text-gray-600">Views</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-md font-semibold text-gray-800">9.7K</p>
              <p className="text-sm text-gray-600">Followers</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-md font-semibold text-gray-800">434</p>
              <p className="text-sm text-gray-600">Following</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
