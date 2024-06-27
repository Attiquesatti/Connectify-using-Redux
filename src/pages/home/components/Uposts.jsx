import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../../../redux/slice/unsplash';

const Uposts = () => {
  const dispatch = useDispatch();
  const { isLoading, data: images, isError } = useSelector((state) => state.images);

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
    <div className="w-4/5 overflow-auto bg-gray-200 mx-auto">
      <div className="flex flex-col items-center">
        {images?.map((item, index) => (
          <div key={index} className="post mb-4 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">{item.id}</h3>
            <img src={item.url} alt={`Post ${index}`} className="mt-2 rounded-md" />
            <p className="text-gray-600 mt-2">Comments: {item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Uposts;
