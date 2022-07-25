import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../Redux/actions";

export const Posts = () => {
  const dispatch = useDispatch();

  const { data, filterData } = useSelector((state) => state.reducer);
  console.log(data, "dataposts", filterData, "filterdata");
  useEffect(() => {
    dispatch(getPosts(data));
  }, [dispatch]);

  return <div>Post</div>;
};