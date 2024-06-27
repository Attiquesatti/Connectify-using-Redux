import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { fetchImages } from "../../../redux/slice/unsplash";
import "./customscroll.css"

import {
  AiFillSave,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import Comments from "./comments";

const Posts = () => {
  const [post, setPost] = useState(false);

  const [comments, setComments]=useState(false);

  const togglecomments = () =>{
    setComments(true);
  }

  const togglepost = () => {
    setPost(true);
  };

  const dispatch = useDispatch();
  const {
    isLoading,
    data: images,
    isError,
  } = useSelector((state) => state.images);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <div>
        {images?.map((item, index) => (
          <div
            key={index}
            className="relative border max-w-screen-md bg-white mt-5 rounded-2xl p-4 justify-center mx-auto"
          >
            <div className="flex items-center justify-between">
              <div className="gap-3.5 flex items-center">
                <img
                  src={item.profile_image}
                  className="object-cover bg-yellow-500 rounded-full w-10 h-10"
                />
                <div className="flex flex-col">
                  <b className="mb-0 capitalize">{item.name}</b>
                  <span className="mt-[-5px] text-gray-400 text-sm">
                    @{item.username}
                  </span>
                  <time dateTime="06-08-21" className="text-gray-400 text-xs">
                    {item.date}
                  </time>
                </div>
              </div>
              <div className="bg-gray-100 rounded-full h-3.5 flex items-center justify-center">
                <button onClick={togglepost}>
                  <BsThreeDots />
                </button>
              </div>
              {post && (
                <div className="absolute right-0 mt-10 w-48 bg-white rounded-md shadow-lg">
                  <ul>
                    <li
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => {
                        setPost(false);
                      }}
                    >
                      I don't want to see this
                    </li>
                    <li
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => {
                        setPost(false);
                      }}
                    >
                      Unfollow
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="whitespace-pre-wrap mt-7">{item.description}</div>
            <div className="mt-5 flex gap-2 justify-center border-b pb-4 flex-wrap">
              <img
                src={item.url}
                className="bg-red-500 rounded-2xl w-1/3 object-cover h-96 flex-auto"
                alt="photo"
              />
              <img
                src={item.url}
                className="bg-red-500 rounded-2xl w-1/3 object-cover h-96 flex-auto"
                alt="photo"
              />
            </div>
            <div className="h-12 border-b flex items-center justify-around">
              <button className="flex items-center gap-2">
                <SlLike className="h-5 w-5 text-gray-500" />
                <p className="text-sm">{item.likes} Likes</p>
              </button>
              <button className="flex items-center gap-2" onClick={togglecomments}>
                <AiOutlineComment className="h-5 w-5 text-gray-500" />
                <p className="text-sm">10 Comments</p>
              </button>
              <button className="flex items-center gap-2">
                <AiOutlineShareAlt className="h-6 w-6 text-gray-500" />
                <p className="text-sm">Share</p>
              </button>
              <button className="flex items-center gap-2">
                <AiFillSave className="h-6 w-6 text-gray-500" />
                <p className="text-sm">Saved</p>
              </button>
            </div>
            {comments && <Comments setComments={setComments}/>}
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
