import React from "react";
import posts from "../../assets/Data/Post.json";
//React-icons
import { FiMoreHorizontal,FiSmile } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdCollections } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi";

const Posts = () => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <div className=" shadow-sm border rounded-md mt-3 mb-3" key={post.id}>
            {/* post header */}
            <div className="flex items-center justify-between p-2">
              <img
                src={post.img}
                alt=""
                className="w-12 h-12 border object-cover border-red-500 p-[2px] rounded-full"
              />
              <p className="flex-1 ml-2">{post.name}</p>
              <FiMoreHorizontal />
            </div>
            {/* post img */}
            <div>
              <img src={post.img} alt="" className="w-full object-cover" />
            </div>
            {/* post caption */}
            <div className="flex justify-between items-center text-2xl p-5 max-w-2xl mx-auto">
              <div className="flex items-center justify-between cursor-pointer space-x-4">
                <AiOutlineHeart />
                <FaRegComment />
                <HiOutlinePaperAirplane className="rotate-45" />
              </div>
              <MdCollections />
            </div>

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
