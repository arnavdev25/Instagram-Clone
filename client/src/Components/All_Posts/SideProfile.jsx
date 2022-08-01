import React from 'react';

const SideProfile = () => {
  let user=JSON.parse(localStorage.getItem("User"))
  // console.log(user)
  return (
    <div className="ml-7 mt-10 flex items-center ">
      <img src={user.profile_photo} alt="user" className="rounded-full w-16 h-16 object-cover border p-[2px]"/>
      <div className="ml-[10px]">
        <h1 className="text-base">{user.username}</h1>
        <p className="font-sm text-gray-500 text-sm">{user.name}</p>
      </div>
      <button className="text-blue-400 text-sm ml-28">Switch</button>
    </div>
  )
}

export default SideProfile
