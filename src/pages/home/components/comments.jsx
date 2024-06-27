import React, { useState } from 'react';
import { BiSend } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../redux/slice/addcomments';


const Comments = ({ setComments }) => {
  const [commentText, setCommentText] = useState('');
  
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.addcomments);
  const { data: images } = useSelector((state) => state.images);

  const profile = images.length > 0 ? images[8] : null;

  const handleAddComment = () => {
    if (commentText.trim()) {
      dispatch(addComment({ text: commentText, profile: profile?.profile }));
      setCommentText('');
    }
  };

  return (
    <div className="relative border max-w-screen-md bg-white rounded-md p-4 justify-center mx-auto border-t-0">
       <div className="mt-4">
        {comments?.map((comment, index) => (
          <div key={index} className="flex items-start space-x-2 mb-2">
            <img
              className="object-cover w-8 h-8 rounded-full"
              src={comment.profile}
              alt="profile"
            />
            <div className="bg-gray-100 rounded-md p-2 w-full">
              <p className="text-sm">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <img
          className="object-cover w-12 h-12 rounded-full"
          src={profile?.profile}
          alt="profile"
        />
        <div className="relative inline-block w-full">
          <input
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="px-2 pl-8 rounded-full text-sm ms-2 w-full h-8 bg-slate-200 focus:outline-none custom-placeholder focus:outline-gray-100"
            placeholder="Type a comment"
          />
          <button
            className="absolute inset-y-0 right-0 flex items-center pr-2"
            onClick={handleAddComment}
          >
            <BiSend className="h-5 w-5 text-gray-600 hover:text-gray-800" />
          </button>
        </div>
        <button
          onClick={() => setComments(false)}
          className="absolute top-1 right-1 text-gray-500 hover:text-gray-700 text-xs"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Comments;
