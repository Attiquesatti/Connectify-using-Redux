import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCombinedData } from '../../../redux/slice/dataslice';


const PostComponent = () => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchCombinedData());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="w-4/5 overflow-auto bg-gray-200 mx-auto">
    <div className="flex flex-col items-center">
      {data?.map((item, index) => (
        <div key={index} className="post mb-4 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
          <img src={item.image} alt={`Post ${index}`} className="mt-2 rounded-md" />
          <p className="text-gray-600 mt-2">Comments: {item.comment}</p>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default PostComponent;
