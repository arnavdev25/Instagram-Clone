import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {CgProfile} from "react-icons/cg";
import {MdPhotoLibrary} from "react-icons/md";
import {FiSettings} from "react-icons/fi";
import {HiSwitchHorizontal} from "react-icons/hi";
  // console.log(user)
const MenuDropdown = () => {
  const [isActive,setIsActive] = useState(false);
  const navigate=useNavigate()
  let user=JSON.parse(localStorage.getItem("User"))
   function logout(){
    localStorage.clear()
    navigate("/")
   }
  return (
    <>

      <div
      style={isActive?{border:"1px solid black"}:{border:"none"}}
        className="h-6 w-6 rounded-full border border-slate-200 overflow-hidden z-10"
      >
        <img  onClick={()=>setIsActive(!isActive)} src={user.profile_photo} alt=""/>
      </div>

      <div className={isActive ? "visible absolute top-[50px] right-[0px] lg:right-[200px] rounded-md shadow-md bg-white" : "hidden"}>
        <nav className="dropdown-inner" style={{ width: "230px" }}>
          <ul>
            <li className="menu-item hover:bg-gray-50 active:bg-gray-100">
              <Link to="/profile" className="flex py-2.5 px-4 items-center text-sm">
                <CgProfile/>
                <span className="ml-3">Profile</span>
              </Link>
            </li>
            <li className="menu-item flex hover:bg-gray-50 active:bg-gray-100">
              <Link to="" className="flex py-2.5 px-4 items-center text-sm">
                <MdPhotoLibrary/>
                <span className="ml-3">Saved</span>
              </Link>
            </li>
            <li className="menu-item flex hover:bg-gray-50 active:bg-gray-100">
              <Link to="" className="flex py-2.5 px-4 items-center text-sm">
                <FiSettings/>
                <span className="ml-3">Settings</span>
              </Link>
            </li>
            <li className="menu-item flex mb-1 hover:bg-gray-50 active:bg-gray-100">
              <Link to="" className="flex  py-2.5 px-4 items-center text-sm">
                <HiSwitchHorizontal/>
                <span className="ml-3">Switch Accounts</span>
              </Link>
            </li>
            <li className="menu-item flex border-t hover:bg-gray-50 active:bg-gray-100">
              
                <button className="py-2.5 px-4 mb-1 text-sm" type="submit" onClick={logout} >
                  Log Out
                </button>
              
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MenuDropdown;
