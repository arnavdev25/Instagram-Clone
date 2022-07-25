import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart ,AiFillHeart} from "react-icons/ai";
import { IoHeartCircleOutline} from "react-icons/io5";


const ActivityDropdown = () => {
 const [isActive,setIsActive] = useState(false);

  const handleActiveDropdown = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <Link to="/" onClick={handleActiveDropdown} className="relative" >
        {isActive === false ? (
          <AiOutlineHeart/>
        ) : (
          <AiFillHeart/>
        )}
      </Link>

      <div
        className={isActive ? "visible absolute top-[50px] right-[0px] lg:right-[200px] rounded-md shadow-md" : "hidden"}
      >
        <div className="w-[500px] h-[250px] ">
          <div className="flex justify-center flex-col items-center px-10 h-full z-10 bg-white">
            <div> <IoHeartCircleOutline className='h-20 w-20 text-gray-500'/> </div>
            <p className="mt-4 text-sm">Activity On Your Posts</p>
            <p className="mt-4 text-center text-sm">
              When someone likes or comments on one of your posts, you'll see it
              here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityDropdown;
