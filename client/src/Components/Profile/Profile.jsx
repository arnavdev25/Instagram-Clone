import React from "react";
import { GoVerified } from "react-icons/go";
import { FiMoreHorizontal } from "react-icons/fi";
import styled from "styled-components";

const Profsty = styled.div`
  width:70%;
  margin-top: 1.875rem;
  display: flex;
  justify-content: space-around;

  .imgtag {
    width: 10.5rem;
    height: 10.5rem;
    border-radius: 50%;
  }

  .profstruc{
    width:25rem;
    
  }

  .namestruc{
    /* display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto; */
    display: flex;
    justify-content:space-evenly;
    align-items: center;
  }

  .userdiv{
    display:flex;
   align-items: baseline;

  }
  .userdiv>div {
    font-size: 1.75rem;
  }
  
 .buttondiv{
  display: flex;
   .msg{
    background-color: white;
    border:0.0625rem solid gray;
    padding:0.25rem;
    margin: 0 0.3125rem 0 0.3125rem;
    border-radius:0.25rem;
   }
   .follow{
    background-color:#0095f6 ;
    color:white;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    border:0.0625rem solid gray;
    margin: 0 0.3125rem 0 0.3125rem;
    border-radius:0.25rem;
   }
   .threedot{

    background-color: white;
    border:none;
    font-size: 1.5rem;
    
   }

 }
 .postsno{
   margin:0.625rem;
   /* border: 0.0625rem solid ; */
  
   display: grid;
   grid-template-columns: repeat(3,1fr);
   grid-template-rows: auto;
  
   }
   .postsno div{
    font-weight: bold;
    padding:0.625rem;
   }
   .postsno span{
    font-weight: normal;
   }
.founderdiv{
  display: flex;
  flex-direction: column;
  /* border: 0.0625rem solid red; */
  padding:1.25rem;
  text-align: left;
  line-height: 150%;
}
@media (max-width: 798px) {
  width:70%;
  margin-top: 1.875rem;
  display: grid;
  gap:20px;

}

@media all and (min-width:50px) and (max-width:600px) {
  width:70%;
  margin-top:4.53vh;
  display: flex;
  justify-content: space-around;

  .imgtag {
    width: 20.40vw;
    height: 24.41vh;
    border-radius: 50%;
  }

  .profstruc{
    width:39.06vw;
    
  }

  .namestruc{
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    gap:1.51vh;
    /* display: flex;
    justify-content:space-evenly;
    align-items: center;
     */
    }
  .userdiv{
    display:flex;
   align-items: baseline;

  }
  .userdiv>div {
    font-size: 1.5rem;
  }
  
 .buttondiv{
  display: flex;
   .msg{
  
    background-color: white;
    border:0.0625rem solid gray;
    padding:0.25rem;
    margin: 0 0.3125rem 0 0.3125rem;
    border-radius:0.25rem;
   }
   .follow{
    background-color:#0095f6 ;
    color:white;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    border:0.0625rem solid gray;
    margin: 0 0.3125rem 0 0.3125rem;
    border-radius:0.25rem;
   }
   .threedot{

    background-color: white;
    border:none;
    font-size: 1.5rem;
    
   }

 }
 .postsno{
   margin:0.625rem;
   /* border: 0.0625rem solid ; */
  
   display: grid;
   grid-template-columns: repeat(3,1fr);
   grid-template-rows: auto;
  
   }
   .postsno div{
    font-weight: bold;
    padding:0.625rem;
   }
   .postsno span{
    font-weight: normal;
   }
.founderdiv{
  display: flex;
  flex-direction: column;
  /* border: 0.0625rem solid red; */
  padding:1.25rem;
  text-align: left;
  line-height: 150%;
}


}
`

export const Profile = ({  username,  posts_no,  followers_no,  following_no,  user_proj_url,  Avatar_url,}) => {
  return (
    <Profsty>
      <div className="imgdiv">
        <img className="imgtag" src={Avatar_url} alt="Invalid-Image" />
      </div>
      <div className="profstruc">
        <div className="namestruc">
          <div className="userdiv">
            {" "}
            <div >{username}</div>
            <GoVerified style={{color: "0095f6"}}/>
          </div>

          <div className="buttondiv">
            <button className='msg' >Message</button>
            <button className='follow'>Follow</button>
            <button className='threedot'>
              <FiMoreHorizontal />
            </button>
          </div>
        </div>
        <div className="postsno">
          <div>{posts_no}<span>posts</span></div>
          <div>{followers_no}<span>followers</span></div>
          <div>{following_no}<span>following</span></div>
        </div>
        <div className="founderdiv">
          <div>{username}</div>
          <div>founder</div>
          <div>{user_proj_url}</div>
        </div>
      </div>
    </Profsty>
  );
};
