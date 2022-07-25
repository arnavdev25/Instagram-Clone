import { useState } from "react";
import { Link } from "react-router-dom";
import me from "../../assets/me.jpg";

import {CgProfile} from "react-icons/cg";
import {MdPhotoLibrary} from "react-icons/md";
import {FiSettings} from "react-icons/fi";
import {HiSwitchHorizontal} from "react-icons/hi";

const MenuDropdown = () => {
  const [isActive,setIsActive] = useState(false);
  return (
    <>

      <div
      style={isActive?{border:"1px solid black"}:{border:"none"}}
        className="h-6 w-6 rounded-full border border-slate-200 overflow-hidden z-10"
      >
        <img  onClick={()=>setIsActive(!isActive)} src={me} alt=""/>
      </div>

      <div className={isActive ? "visible absolute top-[50px] right-[0px] lg:right-[200px] rounded-md shadow-md bg-white" : "hidden"}>
        <nav className="dropdown-inner" style={{ width: "230px" }}>
          <ul>
            <li className="menu-item hover:bg-gray-50 active:bg-gray-100">
              <Link to="" className="flex py-2.5 px-4 items-center text-sm">
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
              
                <button className="py-2.5 px-4 mb-1 text-sm" type="submit">
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
