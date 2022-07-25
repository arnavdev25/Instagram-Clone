// use axios for api call
import axios from "axios";
import {
  FAILURE,
  REQUEST,
  SEARCH,
  SUCCESS,
  POSTS,
  REELS,
  VIDEOS,
  TAGGED,
} from "./actionTypes";

export const getRequest = () => ({ type: REQUEST });
export const getSuccess = (payload) => ({ type: SUCCESS, payload });
export const getFailure = () => ({ type: FAILURE });
export const getPosts = (payload) => ({ type: POSTS, payload });
export const getReels = (payload) => ({ type: REELS, payload });
export const getVideos = (payload) => ({ type: VIDEOS, payload });
export const getTagged = (payload) => ({ type: TAGGED, payload });

export const getData = () => async (dispatch) => {
  dispatch(getRequest());

  try {
    let res = await axios.get(`http://localhost:4000/user`);
    let data = res.data;
    console.log("data", data);
    dispatch(getSuccess(data));
  } catch (err) {
    console.log("err", err);
    dispatch(getFailure());
  }
};

