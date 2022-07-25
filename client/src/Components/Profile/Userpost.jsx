import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlinePermContactCalendar } from "react-icons/md";


const NavStyle = styled.div`
*{
    color:black;
    text-decoration: none;
}

display: flex;
justify-content: center;

.linksdiv{
width:40%;
text-align: center;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: auto;
margin:0.125rem;
padding:0.625rem;
color:blue;
}
.linksdiv span{
 padding-inline:0.3125rem;
}
@media (max-width: 520px){


}
@media (max-width: 798px) {
.linksdiv span{
display: none;
};

}

`


export const Userpost = () => {
  return (
   <>
   <hr/> 
         <NavStyle>
         <div className='linksdiv'>
         <NavLink  to="/profile/posts"><BsFillGrid3X3GapFill/><span>POSTS</span></NavLink>
         <NavLink  to="/profile/reels"><MdOutlineVideoLibrary/><span>REELS</span></NavLink>
         <NavLink  to="/profile/videos" ><i className="fa-solid fa-circle-play"></i> <span>VIDEOS</span></NavLink>
         <NavLink  to="/profile/tagged" ><MdOutlinePermContactCalendar/><span>TAGGED</span></NavLink>
         </div>
        </NavStyle>
   </>
  )
}
