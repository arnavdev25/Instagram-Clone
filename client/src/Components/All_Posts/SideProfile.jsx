import React from 'react';
import me from '../../assets/me.jpg'

const SideProfile = () => {
  return (
    <div className="ml-7 mt-10 flex items-center ">
      <img src={me} alt="user" className="rounded-full w-16 h-16 object-cover border p-[2px]"/>
      <div className="ml-[10px]">
        <h1 className="text-base">bisht_prth</h1>
        <p className="font-sm text-gray-500 text-sm">Parth Bisht</p>
      </div>
      <button className="text-blue-400 text-sm ml-28">Switch</button>
    </div>
  )
}

export default SideProfile
