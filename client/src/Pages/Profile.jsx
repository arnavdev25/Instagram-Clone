import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { getData } from "../Redux/actions";
import { Profile } from "../Components/Profile/Profile";
import { Stories } from "../Components/Profile/Stories";
import { Userpost } from "../Components/Profile/Userpost";
import { Posts } from "../Components/Profile/Posts";
export const SingleUser = () => {
  return (
    <>
      <Profile />

      {/* {data.map((el)=>{
    return  <Stories key={el.id} {...el} />
   })} */}
      <Userpost />
      <Posts />
    </>
  );
};
