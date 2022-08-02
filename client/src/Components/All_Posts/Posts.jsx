import React, { useEffect, useState } from "react";
//React-icons
import { FiMoreHorizontal, FiSmile } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdCollections } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import axios from "axios";

const Posts = () => {
  let user = JSON.parse(localStorage.getItem("User"));

  const [posts, setPosts] = useState([]);
  const [liked, setLiked] = useState(false);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    },
  };
  useEffect(() => {
    axios.get("http://localhost:8080/post/all").then(({ data }) => {
      console.log(data);
      setPosts(data);
    });
  }, [liked]);
  function likeIt(id) {
    setLiked(true);
    axios.put("http://localhost:8080/post/like", { postId: id }, config);
  }
  function unLikeIt(id) {
    setLiked(false);
    axios.put("http://localhost:8080/post/unlike", { postId: id }, config);
  }
  return (
    <div>
      {posts.map((post) => {
        return (
          <div
            className=" shadow-sm border rounded-md mt-3 mb-3"
            key={post._id}
          >
            {/* post header */}
            <div className="flex items-center justify-between p-2">
              <img
                src={post.postedBy.profile_photo}
                alt=""
                className="w-12 h-12 border object-cover border-red-500 p-[2px] rounded-full"
              />
              <p className="flex-1 ml-2">{post.postedBy.name}</p>
              <FiMoreHorizontal />
            </div>
            {/* post img */}
            <div>
              <img src={post.photo} alt="" className="w-full object-cover" />
            </div>
            {/* post caption */}
            <div>{post.description}</div>
            <div className="flex justify-between  text-2xl py-5 ">
              <div className="flex items-center justify-between cursor-pointer space-x-4">
                {post.likes.includes(user._id) ? (
                  <div
                    onClick={() => {
                      if (post.likes.includes(user._id)) {
                        unLikeIt(post._id);
                      }
                    }}
                  >
                    {" "}
                    <AiFillHeart />
                  </div>
                ) : (
                  <div onClick={() => {
                    if(!post.likes.includes(user._id)){
                      likeIt(post._id)
                    }
                  }}>
                    <AiOutlineHeart />
                  </div>
                )}

                <FaRegComment />
                <HiOutlinePaperAirplane className="rotate-45" />
              </div>
              <MdCollections />
            </div>
            <div>Liked by {post.likes.length} people </div>
            {/* form */}
            <form className="flex items-center p-[10px]">
              <FiSmile className="h-6 w-6" />
              <input
                type="text"
                placeholder="Add a comment..."
                className="border-none flex-1 focus:ring-0 outline-none ml-2 "
              />
              <button className="font-semibold text-blue-500">post</button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
