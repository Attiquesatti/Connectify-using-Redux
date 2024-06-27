import React from "react";
import { useSelector } from "react-redux";
import "./placeholder.css"
import { AiOutlineSearch } from "react-icons/ai";
import { GoFileMedia } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { PiArticleLight } from "react-icons/pi";
import { TbArticle } from "react-icons/tb";

const Writepost = () => {
  const { data: images } = useSelector((state) => state.images);

  const profile = images.length > 0 ? images[8] : null;

  return (
    <div>
        <div className="relative border max-w-screen-md bg-white rounded-2xl p-4 justify-center mx-auto">
            <div className="flex items-center">
          <img
            className="object-cover w-14 h-14 rounded-full"
            src={profile?.profile}
            alt="profile"
          />
          <input
            className="px-2 pl-8 rounded-full text-sm ms-2 w-full h-10 bg-slate-200 focus:outline-none custom-placeholder focus:outline-slate-600"
            placeholder="Start a post, try writing with AI"
          />
            </div>
            <div className="flex justify-around mt-3 text-gray-800 hover:text-gray-950 font-semibold text-md">
                <button className="flex items-center ">
                    <GoFileMedia />
                    <p className="ms-2 ">Media</p>
                </button>
                <button className="flex items-center">
                    <SlCalender />
                    <p className="ms-2">Event</p>
                </button>
                <button className="flex items-center">
                    <TbArticle/>
                    <p className="ms-2">Write article</p>
                </button>
            </div>
        </div>
        <hr className="mt-5"/>
      </div>
  );
};

export default Writepost;
