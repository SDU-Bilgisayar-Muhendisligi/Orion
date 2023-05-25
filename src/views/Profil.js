import React from 'react';

function Profile() {
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-32 h-32 rounded-full object-cover"
        src="https://source.unsplash.com/random"
        alt="Profile"
      />
      <h1 className="text-2xl font-bold mt-4">User</h1>
      <p className="text-gray-500 mt-2">Spotify User</p>
      <div className="flex mt-4">
        <div className="flex flex-col items-center mr-8">
          <p className="text-gray-500">Followers</p>
          <p className="text-2xl font-bold">100</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-500">Following</p>
          <p className="text-2xl font-bold">50</p>
        </div>
      </div>
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4">
        Follow
      </button>
    </div>
  );
}

export default Profile;
