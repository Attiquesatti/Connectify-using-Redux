import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../redux/slice/unsplash";
import { BiArrowFromRight, BiSolidUserPlus } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";

const Rightsidebar = () => {
  const dispatch = useDispatch();
  const {
    data: images,
  } = useSelector((state) => state.images);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  return (
    <div className="h-[423px] w-[25%] bg-gray-100 items-center justify-center shadow-lg font-header-family">
      <h2 class="ps-2 pt-4 pb-2 text-md font-medium text-gray-800">
        Add to your feed
      </h2>
      {images?.slice(0, 6).map((item, index) => (
        <>
          <button className="flex items-center w-full p-2 transition-colors duration-200 focus:outline-none text-gray-600">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src={item.profile_image}
              alt="profile"
            />
            <div className="text-left w-full ml-2">
              <div className="flex justify-between items-center">
                <h1 className="text-sm font-medium text-gray-700 capitalize">
                  {item.name}
                </h1>
                <span className="text-sm font-medium text-blue-500 flex items-center hover:text-blue-800">
                  <BiSolidUserPlus/>Follow</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {item.bio ? `${item.bio.slice(0, 35)}...` : "Software Developer"}
              </p>
            </div>
          </button>
        </>
      ))}
      <button className="flex ps-3 pt-2 text-sm font-medium text-gray-800 items-center">
        View all recommendations
        <BsArrowRightShort className="text-xl font-medium" />
      </button>
    </div>
  );
};

export default Rightsidebar;
