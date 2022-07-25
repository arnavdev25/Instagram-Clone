import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";

import { getData } from '../Redux/actions'
import { Profile } from '../Components/Profile/Profile';
import { Stories } from '../Components/Profile/Stories';
import { Userpost } from '../Components/Profile/Userpost';
export const SingleUser = () => {
 
 const {data,isLoading,isError} = useSelector((state)=>state.reducer)
 const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getData())
  },[dispatch])

  return (
   <>
   {data.map((el)=>{
    return <Profile key={el.id} {...el} />
   })}
   
   {data.map((el)=>{
    return  <Stories key={el.id} {...el} />
   })}
    <Userpost/>

   </>
  )
}
